import {postPath, categoryPath} from './path';

export const fetchTopRatings = () => (dispatch) => {
    dispatch({
        type: 'FETCHING_TOP_RATING'
    })
    fetch(postPath + '/top-rating')
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_TOP_RATING',
                payload: postDataJSON
            });
        })
}

export const fetchRecentPosts = () => (dispatch) => {
    dispatch({
        type: 'FETCHING_RECENT_POST'
    })
    fetch(postPath + '/recent-post')
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_RECENT_POST',
                payload: postDataJSON
            });
        })
}

export const fetchTopViews = () => (dispatch) => {
    dispatch({
        type: 'FETCHING_TOP_VIEW'
    })
    fetch(postPath + '/top-view')
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_TOP_VIEW',
                payload: postDataJSON
            });
        })
}

export const fetchCategories = () => dispatch => {
    fetch(categoryPath)
    .then(categoryData => categoryData.json())
    .then(categoryJSON => {
        dispatch({
            type: 'FETCH_CATEGORIES',
            payload: categoryJSON
        })
    })
}