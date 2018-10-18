import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

export default class AppButton extends Component{
    render(){
        const {action, iconName, iconColor, title, bgColor, widthl} = this.props;
        const {width} = Dimensions.get("window");
        return(
            <Button
                onPress={action}
                buttonStyle={{
                    backgroundColor : bgColor,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    marginBottom: 5,
                    width: widthl,
                    
                }}
                title={title}
                icon={
                    <Icon
                        name={iconName}
                        color={iconColor}
                        size={15}
                    />
                }
                text={title}
                iconRight={true}
                
            >

            </Button>
        )
    }
}