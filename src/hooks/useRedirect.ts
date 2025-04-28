import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/stringed/${id}`);
    };

    return { handleClick };
};
