import { InstrumentData } from "core/types";

export function getViewCounts(viewedProducts: any) {
    const viewCounts: any = {};

    viewedProducts.forEach((product: any) => {
        if (!viewCounts[product.id]) {
            viewCounts[product.id] = { product, count: 0 };
        }
        viewCounts[product.id].count++;
    });

    return viewCounts;
}

export function generateUserProfile(viewedProducts: any, cartProducts: any) {
    const viewCounts = getViewCounts(viewedProducts);
    const attributeWeights: any = {};

    for (const { product, count } of Object.values(viewCounts) as { product: InstrumentData; count: number }[]) {
        const weight = 1 + Math.min(count - 1, 1);
        addAttributes(attributeWeights, product, weight);
    }

    cartProducts.forEach((product: any) => {
        addAttributes(attributeWeights, product, 3);
    });

    return attributeWeights;
}

export function addAttributes(
    attributeWeights: any,
    product: any,
    weight: any
) { 
    const { title, color, type, price } = product;

    attributeWeights.title = attributeWeights.title || {};
    attributeWeights.color = attributeWeights.color || {};
    attributeWeights.type = attributeWeights.type || {};
    attributeWeights.price = attributeWeights.price || [];

    attributeWeights.title[title] =
        (attributeWeights.title[title] || 0) + weight;
    attributeWeights.color[color] =
        (attributeWeights.color[color] || 0) + weight;
    attributeWeights.type[type] = (attributeWeights.type[type] || 0) + weight;
    
    const numericPrice = parseFloat(price.replace(/[^\d.]/g, "").replace(/\s/g, ""));
    attributeWeights.price.push({ price: numericPrice, weight });
}

export function findSimilarProducts(allProducts: any[], userProfile: any) {
    return allProducts
        .map((product) => {
            let score = 0;

            if (userProfile.title?.[product.title]) {
                score += userProfile.title[product.title];
            }
            if (userProfile.color?.[product.color]) {
                score += userProfile.color[product.color];
            }
            if (userProfile.type?.[product.type]) {
                score += userProfile.type[product.type];
            }            

            const priceData = userProfile.price ?? [];

            const totalWeight = priceData.reduce(
                (sum: number, product: { price: number; weight: number }) => sum + product.weight,
                0
            );
            const avgPrice = priceData.reduce(
                (sum: number, product: { price: number; weight: number }) => sum + product.price * product.weight,
                0
            ) / totalWeight;

            const priceDifference = Math.abs(product.price - avgPrice);
            if (priceDifference < 50) {
                score += 2;
            }

            return { ...product, similarityScore: score };
        })
        .filter(product => product.similarityScore > 0)
        .sort((a, b) => b.similarityScore - a.similarityScore);
}
