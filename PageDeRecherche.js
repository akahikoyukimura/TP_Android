import React,{Component} from 'react';
import {StyleSheet,Text,View,Button,TextInput,Image} from 'react-native';

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
                <View style={styles.fluxDroite}>
                    <TextInput underlineColorAndroid={'transparent'}
                    style={styles.requeteEntree}
                    placeholder='Recherche par nom de pays'/>
                <Button onPress={()=>{}}
                color='#48AAEC'
                title='Démarrer'/>
                </View>
                <Image source={require('./Ressources/pays.png')} style={styles.image} />
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
    fluxDroite:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'stretch',
    },
    requeteEntree:{
        height:36,
        padding:4,
        marginRight:5,
        flexGrow:1,
        fontSize:18,
        borderWidth:1,
        borderColor:'#48AAEC',
        borderRadius:8,
        color:'#48AAEC',
    },
    image:{
        width:220,
        height:140,
    },
   });