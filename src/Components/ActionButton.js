import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';


class ActionButton extends Component {

    state = {
        formOpen: false
    }

    openForm=()=>{
        this.setState ({
            formOpen: true
        })
    }
    

    AddButton=()=> {
        const{list} = this.props;

        const ButtonText = list ? 'Add another list': 'Add another Card';
        const ButtonTextOpacity = list ? '0.5' : '1';
        const ButtonTextColor = list ? 'white' : 'inherit';
        const ButtonTextBg = list ? 'regba(#6b778c)' : 'inherit';

        return(
            <div
            onClick={this.openForm}
            style={{
                ...styles.OpenforButtonGroup,
                opacity: ButtonTextOpacity,
                Color: ButtonTextColor,
                backgroundcolor: ButtonTextBg
            }}>
                <Icon>add</Icon>
                <p>{ButtonText}</p> 
            </div>
        );
    };

    renderForm=()=> {
        return <p>Hello</p>;
    }

    render(){
        return this.state.formOpen ? this.renderForm() : this.AddButton();
    }
}
const styles ={
    OpenforButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        curser: 'pointer',
        boarderRadious: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    }
}

export default ActionButton;