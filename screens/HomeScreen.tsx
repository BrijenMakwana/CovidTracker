import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView, FlatList,View } from 'react-native';
import CountryItem from '../components/CountryItem';
import StateItem from '../components/StateItem';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function HomeScreen() {
  const [countryData, setCountryData] = useState({});
  const [stateData,setStateData] = useState();

  const colorScheme = useColorScheme();
  
  
  const getIndiaData = async () =>{

   await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
   .then( (response)=> {
   
     setCountryData(response.data.data.summary)
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

  useEffect(() => {
    getIndiaData();
    
  }, []);
  

  
  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor: Colors[colorScheme].background
    }]}>
      
      <FlatList
        data={stateData}
        renderItem={({item}) => <StateItem stateData={item}/>}
        keyExtractor={item=>item.loc}
        ListHeaderComponent={<CountryItem countryData={countryData}/>}
        ListFooterComponent={<View style={{height: 20}}/>}
      />
     
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
    
  }
});
