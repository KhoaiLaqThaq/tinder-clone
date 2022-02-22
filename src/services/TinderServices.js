import axios from "./axios";

const getTinderCards = () => {
    return axios.get("/tinder/cards");
}

const createTinderCard = (data) => {
    return axios.post("/tinder/cards", data);
}

export default {
    getTinderCards,
    createTinderCard
}
