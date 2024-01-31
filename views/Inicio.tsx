import React, {useState} from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";


const Inicio = ({navigation}) =>{

    const handlePress = ()=>{
        navigation.navigate('Perfil');
    } 

    const handlePressKeanu = ()=>{
        navigation.navigate('Keanu');
    } 

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.contenedor}>
                <Text style={styles.encabezado}>Midgard Amador</Text>
                <Button
                title='Perfil personal'
                onPress={handlePress}
                />
                
                <Button
                title='Inspiraciones'
                onPress={handlePressKeanu}
                />

            </ScrollView>
        </SafeAreaView>

    );

};

const styles = StyleSheet.create({
    botones:{
        alignItems: 'center',
        padding: 30
    },
    contenedor:{
        alignItems: 'center',
        margin: 25


    },
    encabezado:{
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',

    }

});

export default Inicio;