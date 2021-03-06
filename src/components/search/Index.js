import React from 'react';
import { connect } from 'react-redux';

import '../search/Index.css';
import { searchPost, changeKeyword, resetResult } from '../../actions/Post.Actions';

const Search = (props) => {


    const handleOnChangeInput = (e) => {
        this.props.changeKeyword(e.target.value);
    }

    const handleOnClickButton = e => {
        e.preventDefault();
        const { keyword, searchPost, sortBy, resetResult } = this.props;
        resetResult();
        searchPost(keyword, 0, sortBy);
    }



    return (
        <div className="blog-slide-bar-search">
            <form>
                <input autoComplete="off" name="keyword" type="text"
                    onChange={(e) => this.handleOnChangeInput(e)}
                    placeholder="Search keyword . . ."
                    className="dis-block width-100 m-b-20 p-lr-10" />
                <button onClick={(e) => this.handleOnClickButton(e)}
                    className="dis-block width-100 button button-no-color border-green fc-1">Search</button>
            </form>
        </div>
    );



}

const mapStateToProps = (state) => {
    return {
        isSearch: state.postReducer.isSearch,
        keyword: state.postReducer.keyword,
        sortBy: state.postReducer.sortBy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchPost: (keyword, page, sortBy) => {
            dispatch(searchPost(keyword, page, sortBy))
        },
        changeKeyword: keyword => {
            dispatch(changeKeyword(keyword))
        },
        resetResult: () => {
            dispatch(resetResult())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)