import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, ImageSourcePropType, View } from 'react-native';

type House = {
  name: string;
  color: string;
  image: ImageSourcePropType
};

type Props = {
  house: House;
  onPress: () => void;
};


const HouseCard = ({ house, onPress }: Props) => (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.card, { backgroundColor: "#E1C893" }]} onPress={onPress}>
            <Image style={styles.image} source={house.image}/>
            <Text style={[styles.text,{color:house.color}]}>{house.name}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container:{
        padding  : 20
    },
    card: {
        width: 160, 
        height: 160,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
    },
    image:{
        width : 110,
        height : 130,
        resizeMode: 'contain',
    },
    text: {
        fontFamily: 'HarryPotter',
       // color: '#fff',
        fontSize: 30
    },
});

export default HouseCard;
