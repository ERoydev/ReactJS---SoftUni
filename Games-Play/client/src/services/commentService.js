import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`
    });

    const result = await request.get(`${baseUrl}?${query}`)

    // TODO: Temporary solution.This bellow can be optimized for a better performance.
    // return result.filter(comment => comment.gameId === gameId);
    return result;
}

export const create = async (gameId, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        text,
    });

    return newComment;
}
