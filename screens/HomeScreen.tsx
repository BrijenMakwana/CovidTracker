import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView, FlatList,View, RefreshControl,Text } from 'react-native';
import CountryItem from '../components/CountryItem';
import StateItem from '../components/StateItem';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function HomeScreen() {
  // storing country covid data
  const [countryData, setCountryData] = useState({});
  // storing states covid data
  const [stateData,setStateData] = useState();
  // if user refresh or not
  const [refreshing,setRefreshing] = useState(false);

  const colorScheme = useColorScheme();
  
  // get data from the API
  const getIndiaData = async () =>{

   await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
   .then( (response)=> {
   
    // set data about India
     setCountryData(response.data.data.summary)
    //  set data about states
     setStateData(response.data.data.regional)
     
   })
   .catch( (error)=> {
     // handle error
     console.log(error);
   })
   .then(function () {
     // always executed
   });
 }

//  call the function only once when user open the app
  useEffect(() => {
    getIndiaData();
    
  }, []);
  
  // call the function when user pull to refresh
  const onRefresh = () => {
    // call the API again for updated data
    getIndiaData();
    // set refreshing true
    setRefreshing(true);
    // set refreshing to false after specified seconds
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);

  }
  
  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor: Colors[colorScheme].background
    }]}>
      {/* list of states */}
      <FlatList
        data={stateData}
        renderItem={({item}) => <StateItem stateData={item}/>}
        keyExtractor={item=>item.loc}
        // country data as a header component
        ListHeaderComponent={
          <View style={styles.headerComponent}>
            <Text 
              style={[styles.date,{
                color: Colors[colorScheme].tint
              }]}
            >
              {moment(new Date()).format("Do MMM YYYY")}
            </Text>
            <CountryItem countryData={countryData}/>
          </View>
        
      }
        ListFooterComponent={<View style={styles.bottomComponent}/>}
        refreshControl={
          <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              title= {refreshing ? "Refreshing" : "Pull to Refresh"}
              tintColor= {Colors[colorScheme].tint}
              titleColor= {Colors[colorScheme].tint}
           />
        }
      />
     
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
    
  },
  headerComponent:{
    marginTop: 50,
    alignItems: "center"
  },
  date:{
    fontSize: 25,
    fontWeight: "bold"
  },
  bottomComponent:{
    height: 30
  }
});
