import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export type StateItemProps = {
    stateData: {
        loc: string;
        discharged: number;
        deaths: number;
        totalConfirmed: number;
    }
}

const StateItem = (props: StateItemProps) => {
    const colorScheme = useColorScheme();
    
  return (
    <View style={[styles.container,{
        backgroundColor: Colors[colorScheme].lightTint
    }]}>
        {/* state name */}
       <Text style={[styles.stateName,{color: Colors[colorScheme].tint}]} allowFontScaling>{props.stateData.loc}</Text>

       
       <View style={styles.casesContainer}>
            {/* confirmed cases */}
            <View style={{alignItems: "center"}}>
                <Text style={styles.heading}>Total Cases</Text>
                <Text style={[styles.stats,{color: "#161853"}]}>{props.stateData.totalConfirmed}</Text>
            </View>
            

            { /* discharged */}
            <View style={{alignItems: "center"}}>
                <Text style={styles.heading}>Recovered</Text>
                <Text style={[styles.stats,{color: "#519259"}]}>{props.stateData.discharged}</Text>
            </View>


             {/* deaths */}
            <View style={{alignItems: "center"}}>
                <Text style={styles.heading}>Deaths</Text>
                <Text style={[styles.stats,{color: "#EC255A"}]}>{props.stateData.deaths}</Text>
            </View>
            
       </View>
       

      
       
    </View>
  );
};

export default StateItem;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding: 10,
        borderRadius: 30,
        shadowOpacity: 0.5,
        elevation: 7,
        shadowColor: "#000",
        shadowOffset:{
            height: 7,
            width: 7
        },
        marginTop: 30,
        alignSelf: "center"
    },
    stateName:{
        color: "#000",
        fontSize: 25,
        fontWeight: "bold",
        padding: 10,
        marginLeft: 10
    },
    casesContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10
    },
    heading:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#000"
    },
    stats:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    }
});
