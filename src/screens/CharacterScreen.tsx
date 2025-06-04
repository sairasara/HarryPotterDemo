import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { fetchCharactersByHouse } from '../api/HarryPotterApi';
import LinearGradient from 'react-native-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'Characters'>;

const CharacterScreen: React.FC<Props> = ({ route, navigation }) => {
  const { house } = route.params;
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharactersByHouse(house.name).then((data) => {
      setCharacters(data);
      setLoading(false);
    });
  }, [house.name]);

  if (loading) {
    return (
      <LinearGradient  style={styles.gradient} colors={["#E8C48C","#F2D6AD","#F0D9B1","#EED4AD", "#E5BF85"]}>
            <ActivityIndicator style={{ marginTop: 20 }} size="large" />;
      </LinearGradient>
    )
  }

  function showPlaceHolder(gender: string){

      const placeholder = (gender == "male")? (require('../../assets/images/male_placeholder.jpg' ))
        : (require('../../assets/images/female_placeholder.jpg'))

    return <Image
            source={placeholder}
            style={styles.image} />
  }

  return (
    <LinearGradient  style={styles.gradient} colors={["#E8C48C","#F2D6AD","#F0D9B1","#EED4AD", "#E5BF85"]}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> navigation.navigate("CharacterDetails", { details: item})}>
            <View style={styles.container}>
              <View style={[styles.imageWrapper, {borderColor: house.color}]}>
                {
                  item.image?
                  ( <Image
                      source={{ uri: item.image}}
                      style={[styles.image]}
                      resizeMode = 'cover'
                      defaultSource={require('../../assets/images/hogwarts.png')}/>)
                  :
                  ( showPlaceHolder(item.gender))
                }
              </View>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container:{
    alignItems: 'center',
    padding:10
  },
  imageWrapper: {
    width: 180, 
    height: 180,
    padding: 2,
    borderRadius: 100,
    borderWidth: 4,
    overflow: 'hidden'
  },
  image:{
     width: '100%', 
     height: '100%',
     borderRadius: 100,
  },
  text:{
    fontFamily: "HarryPotter",
    fontSize: 30
  }
});

export default CharacterScreen;