import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RootStackParamList } from "../types/types";

type Props = NativeStackScreenProps<RootStackParamList, 'CharacterDetails'>;

const CharacterDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { details } = route.params;

    return(
         <LinearGradient  style={styles.gradient} colors={["#E8C48C","#F2D6AD","#F0D9B1","#EED4AD", "#E5BF85"]}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri : details.image}}/>
                <Text style={styles.nametext}>{details.name}</Text>
            </View>
  
                <View style={styles.innerContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.text}>{"Actor :".toUpperCase() }</Text>
                        <Text style={styles.textValue}>{details.actor}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.text}>{"Birth :".toUpperCase() }</Text>
                        <Text style={styles.textValue}>{details.dateOfBirth}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.text}>{"Gender :".toUpperCase() }</Text>
                        <Text style={styles.textValue}>{details.gender}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.text}>{"Eyes :".toUpperCase() }</Text>
                        <Text style={styles.textValue}>{details.eyeColour}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.text}>{"Hair :".toUpperCase() }</Text>
                        <Text style={styles.textValue}>{details.hairColour}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.text}>{"Patronus :".toUpperCase() }</Text>
                        <Text style={styles.textValue}>{details.patronus}</Text>
                    </View>
                </View>
         </LinearGradient>
    );
}

const styles=StyleSheet.create({
    gradient:{
        flex: 1,
        padding: 10
    },
    container:{
        alignItems: 'center',
    },
    image:{
        height: 200,
        width: 200,
        borderRadius: 100
    },
    nametext:{
        fontFamily: "HarryPotter",
        fontSize: 45,
        padding: 10
    },
    textValue:{
        fontFamily: "HarryPotter",
        fontSize: 30,
        padding: 10
    },
    text:{
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    innerContainer:{
        marginTop: 20
    },
    rowContainer:{
        flexDirection:"row",
        backgroundColor: "#E1C893", 
        borderRadius: 10,
        margin: 10
    }
});

export default CharacterDetailScreen;