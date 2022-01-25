import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

export type CountryItemProps = {
    countryData: {
        confirmedCasesIndian: number;
        deaths: number;
        total: number;
        discharged: number;
    }
}

const CountryItem = (props: CountryItemProps) => {
  return (
    <View style={styles.container}>

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
                <Text style={styles.capital}>Delhi</Text>
            </View>
            <View style={styles.populationContainer}>
                {/* population of the country */}
                <Text style={styles.heading}>Total</Text>
                <Text style={styles.population}>{props.countryData.total}</Text>
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
        backgroundColor: "#A6CF98",
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
        alignSelf: "center"
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
        justifyContent: "space-around"
    },
    capitalContainer:{
        padding: 5
    },
    heading:{
        fontSize: 23,
        fontWeight: "bold",
        color: "#000"
    },
    capital:{
        fontSize: 20,
        marginTop: 8,
        fontWeight: "500",
        color: "#fff"
    },
    populationContainer:{
        padding: 5
    },
    population:{
        fontSize: 20,
        marginTop: 8,
        fontWeight: "500",
        color: "#fff"
    },
    statistics:{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around"
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
