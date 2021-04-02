import React, {Component} from 'react';

export class Button extends Component
{
    handleClick () 
    {
        const {disabled,onClick} = this.props;
        if ((onClick) && (!disabled))
           this.props.onClick();
    }

    render()
    {
        var cssButtonClass = "";
        if (this.props.display == "+" || this.props.display == "-" || 
            this.props.display == "*" || this.props.display == "/" || this.props.display == "=")
            cssButtonClass = this.props.disabled? "buttonOperators disabled" : "buttonOperators";
        else
        {
            if (this.props.display == "C")
                cssButtonClass = this.props.disabled? "buttonCE disabled" : "buttonCE";
            else
                cssButtonClass = this.props.disabled? "buttonNumbers disabled" : "buttonNumbers";
        }
        return (
        <div className={cssButtonClass} onClick={this.handleClick.bind(this)}>
            {this.props.display}
        </div>
        )
    }
}