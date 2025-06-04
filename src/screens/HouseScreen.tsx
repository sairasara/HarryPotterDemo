import React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types.tsx';
import { houses } from '../constants/houses.tsx';
import HouseCard from '../components/HouseCard';
import LinearGradient from 'react-native-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'Houses'>;

const HouseScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <LinearGradient style={styles.container} colors={["#E8C48C","#F2D6AD","#F0D9B1","#EED4AD", "#E5BF85"]}>
      <Image style={styles.image} source={require("../../assets/images/hogwarts.png")}/>
      <Text style={styles.text}>Hogwarts School of Witchcraft and Wizardry</Text>
      <View style={styles.grid}>
        {houses.map((house) => (
          <HouseCard
            key={house.name}
            house={house}
            onPress={() => navigation.navigate('Characters', { house: house })}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

export default HouseScreen;

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    image:{
      width: 200,
      height: 200
    },
    text:{
      fontFamily: "HarryPotter",
      fontSize: 28,
      color: "#6F5530",
      padding: 10
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
