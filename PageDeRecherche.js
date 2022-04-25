import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

type Props={};
export default class PageDeRecherche extends Component<props>{
    render(){
        return(
            <View style={styles.conteneur} >
                <Text style={styles.description}>
                    Rechercher des pays à explorer !
                </Text>
                <Text style={styles.description}>
                    Rechercher par nom
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
    },
    conteneur:{
        padding:30,
        marginTop:65,
        alignItems:'center',
    },
   });