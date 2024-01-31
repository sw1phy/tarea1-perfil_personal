import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
  } from 'react-native';

const ProfileMidgard = () =>{
    return (
        <SafeAreaView>
          <ScrollView contentContainerStyle={styles.svContenedor}
            contentInsetAdjustmentBehavior="automatic">
              <Image style={styles.fotoPerfil} source={require('../img/MidgardImg.jpg')}/>
              <View>
                <Text style={styles.profileText}>Midgard Said Amador Varela</Text>
                <Text style={styles.texth2}>Nacido el 7 de junio de 2003 en el pintoresco pueblo de Yuscarán, El Paraíso.</Text>
                <Text style={styles.texth3}>Sus principales pasatiempos incluyen desde dedicarse a la cultura en todas sus variantes hasta el ocio, aspecto ineludible de la vida cotidiana.</Text>
                <Text style={styles.texth3}>En la lectura, disfruta leer particularmente las obras de H. P. Lovecraft, padre del horror cósmico.</Text>
                <Text style={styles.texth3}>Su novela favorita es Metro 2033, de Dmitry Glukhovsky, y alimentar el bagaje cultural, prefiere la colección "Para dummies", así como la editorial O'Reilly para formarse en su área profesional</Text>
                <Text style={styles.texth3}>El mundo moderno es el mundo del ocio, para entrenerse, a menudo Midgard toma asiento para mirar una que otra serie de ánime, leer manga o jugar un videojuego (gachas, metroidvanias, fps)</Text>
                <Text style={styles.texth3}>Su género musical favorito es el city-pop.</Text>
    
              </View>
    
    
            </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    profileText:{
      fontSize:24,
      fontWeight: 'bold',
      color: 'black',
      textAlignVertical: "center",
      textAlign: "center",
  
    },
    svContenedor:{
      alignItems: 'center',
      textAlign: 'center',
  
  
    },
    fotoPerfil:{
      margin: 15,
      width:220,
      height:240
    },
    texth2:{
      fontSize: 20,
      color: 'black',
      textAlignVertical: "center",
      textAlign: "center",
      fontStyle: 'italic',
      marginTop: 20,
      margin: 12,
      
    },
  
    texth3:{
      fontSize: 21,
      color: 'black',
      marginStart: 12,
      marginTop: 20,
      marginBottom: 10,
    }
   
  });

  export default ProfileMidgard;