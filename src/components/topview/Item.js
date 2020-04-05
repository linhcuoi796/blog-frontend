import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {toSlug} from '../../utils/helpers';
import '../rightbaritem/Index.css';

class TopViewItem extends Component {

    

    render() {
        const {title, cover, _id, countView} = this.props.data;
        return (
            <div className="top-post-detail right-bar-item flex flex-a-c m-b-25">
                <img src={cover} alt="" />
                <div className="right-bar-item-text m-l-20 lh-15">
                    <Link className="fs-18 fc-black a-hover-to-green" to={'/blog/' + toSlug(title) + '.' + _id} title={title}>
                        {title}
                    </Link>
                    <p className="fc-2 fs-14">
                        
                        <span>{countView}</span>
                        <span>{countView <= 1 ? ' view' : ' views'}</span>
                    </p>
                </div>
            </div>   
        );
    }
}

export default TopViewItem;