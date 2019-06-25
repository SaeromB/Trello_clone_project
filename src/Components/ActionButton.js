import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';


class ActionButton extends Component {

    AddButton=()=> {
        const{list} = this.props;

        const ButtonText = list ? 'Add another list': 'Add another Card';

        return(
            <div>
                <Icon>add</Icon>
                <p>{ButtonText}</p>
            </div>
        );
    };

    render(){
        return this.AddButton();
    }
}

export default ActionButton;

// 버튼을 누르면 다른 카드를 만들수 있는 버튼을 만든다.
// 그럼 toggle 로 만들수 있는것이 아닐까?


