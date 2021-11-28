import React, { Component } from 'react';

export default class BadgetComp extends Component{
    render(props){
        return (
            <div>
                <button type="button" class="btn btn-primary">
                    Notifications <span class="badge bg-secondary">{this.props.count}</span>
                </button>
            </div>
        )
    }
}

