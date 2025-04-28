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

    for (const { product, count } of Object.values(viewCounts)) {
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
    const { brand, color, type, price } = product;

    attributeWeights.brand = attributeWeights.brand || {};
    attributeWeights.color = attributeWeights.color || {};
    attributeWeights.type = attributeWeights.type || {};
    attributeWeights.price = attributeWeights.price || [];

    attributeWeights.brand[brand] =
        (attributeWeights.brand[brand] || 0) + weight;
    attributeWeights.color[color] =
        (attributeWeights.color[color] || 0) + weight;
    attributeWeights.type[type] = (attributeWeights.type[type] || 0) + weight;
    attributeWeights.price.push({ price, weight });
}

export function findSimilarProducts(allProducts: any[], userProfile: any) {
    return allProducts
        .map((product) => {
            let score = 0;

            if (userProfile.brand[product.brand]) {
                score += userProfile.brand[product.brand];
            }
            if (userProfile.color[product.color]) {
                score += userProfile.color[product.color];
            }
            if (userProfile.type[product.type]) {
                score += userProfile.type[product.type];
            }

            const totalWeight = userProfile.price.reduce(
                (sum, p) => sum + p.weight,
                0
            );
            const avgPrice =
                userProfile.price.reduce(
                    (sum, p) => sum + p.price * p.weight,
                    0
                ) / totalWeight;

            const priceDifference = Math.abs(product.price - avgPrice);
            if (priceDifference < 50) {
                score += 2;
            }

            return { ...product, similarityScore: score };
        })
        .sort((a, b) => b.similarityScore - a.similarityScore);
}
