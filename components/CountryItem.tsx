import { StyleSheet, Text, View,Image, Platform } from 'react-native';
import React from 'react';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export type CountryItemProps = {
    countryData: {
        confirmedCasesIndian: number;
        deaths: number;
        total: number;
        discharged: number;
    }
}



const CountryItem = (props: CountryItemProps) => {
    const colorScheme = useColorScheme();

  return (
    <View style={[styles.container,{
        backgroundColor: Colors[colorScheme].tint
    }]}>
          
        {/* contry name and flag */}
        <View style={styles.country}>
            
            <Image
                source={{
                    uri: 'https://flagcdn.com/40x30/in.png'
                }}
                style={styles.flagImage}
            />
            <View style={styles.continent}>
                <Text style={styles.countryName}>India</Text>
                {/* country continent */}
                <Text>Asia</Text>
            </View>
            
        </View>
      

      
        <View style={styles.countryInfo}>
           
            <View style={styles.capitalContainer}>
                 {/* capital city */}
                <Text style={styles.heading}>Capital</Text>
                <Text style={styles.stats}>Delhi</Text>
            </View>
            <View style={styles.populationContainer}>
                {/* population of the country */}
                <Text style={styles.heading}>Population</Text>
                <Text style={styles.stats}>138 Crores</Text>
            </View>

            
            
        </View>
     
        <View style={styles.statistics}>
            {/* confirmed covid cases */}
            <View style={{padding: 5,alignItems: "center"}}>
                <Text style={styles.statisticsHeading}>Total Cases</Text>
                <Text style={styles.statisticsInfo}>{props.countryData.confirmedCasesIndian}</Text>
            </View>
           

            {/* total deaths */}
            <View style={{padding: 5,alignItems: "center"}}>
                <Text style={styles.statisticsHeading}>Total Deaths</Text>
                <Text style={styles.statisticsInfo}>{props.countryData.deaths}</Text>
            </View>
            

            {/* total recovered */}
            <View style={{padding: 5,alignItems: "center"}}>
                <Text style={styles.statisticsHeading}>Recovered</Text>
                <Text style={styles.statisticsInfo}>{props.countryData.discharged}</Text>
            </View>
            
        </View>
      
      
      {/* updated on */}
      {/* <Text style={{color: "red",padding: 20}}>{props.countryData.updated}</Text> */}
    </View>
  );
};

export default CountryItem;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        padding: 10,
        borderRadius: 30,
        shadowOpacity: 0.5,
        elevation: 0.5,
        shadowColor: "#000",
        shadowOffset:{
            height: 5,
            width: 5
        },
        alignSelf: "center",
        marginTop: Platform.OS === "android" ? 20 : 0
    },
    country:{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
        
    },
    flagImage:{
        height: 30,
        width: 40
    },
    continent:{
        alignItems: "flex-end"
    },
    countryName:{
        fontSize: 30,
        color: "#000",
        fontWeight: "bold"
    },
    countryInfo:{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around",
        alignItems: "center"
    },
    capitalContainer:{
        padding: 5,
        alignItems: "center"
    },
    heading:{
        fontSize: 23,
        fontWeight: "bold",
        color: "#000"
    },
    stats:{
        fontSize: 20,
        marginTop: 8,
        fontWeight: "500",
        color: "#fff"
    },
    populationContainer:{
        padding: 5,
        alignItems: "center"
    },
    statistics:{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around",
        alignItems: "center"
    },
    statisticsHeading:{
        color: "#000",
        fontSize: 16,
        fontWeight: "bold"
    },
    statisticsInfo:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        marginTop: 8
    }
});
