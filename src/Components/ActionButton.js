import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {addList, addCard} from '../Actions';





class ActionButton extends Component {

    state = {
        formOpen: false,
        text: ''
    }

    openForm=()=>{
        this.setState ({
            formOpen: true
        })
    }

    closeForm=(e)=>{
        this.setState({
            formOpen: false
        });
    }
    
    handleInputChange=(e)=> {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if(text){
            dispatch(addList(text))
        }
        return;
    }

    handleAddCard = () => {
        const {dispatch, ListID} = this.props;
        const {text} = this.state;

        if(text){
            dispatch(addCard(ListID, text))
        }
        return;
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
        const {list} = this.props;
        const placeholder = list ? 'Enter list title' : 'Enter a title for this card';
        const buttonTitle = list ? 'Add list' : 'Add Card'
        return <div>
            <Card style ={{
                overflow: 'visible',
                minHeight: 80,
                minWidth: 272,
                padding: '6px 8px 2px'
            }}>
                <Textarea placeholder = {placeholder}
                autoFocus onBlur= {this.closeForm}
                value = {this.state.value}
                onChange = {this.handleInputChange}
                style = {{
                    resize: 'none',
                    width: '100%',
                    overflow: 'hidden',
                    boarder: 'none',
                    outline: 'none',
                }}
                />
            </Card>
                <div style={styles.FormButtonGroup}>
                    <Button 
                    onMouseDown = {list ? this.handleAddList : this.handleAddCard}
                    variant = 'contained' 
                    style={{color: 'white', backgroundcolor: '#5aac44'}}>
                    {buttonTitle}{''}
                    </Button>
                    <Icon style={{marginLeft: 8, cursor:'pointer'}}>close</Icon>
                </div>
        </div>
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
    },

    FormButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: 'center'
    }
}

export default connect()(ActionButton);