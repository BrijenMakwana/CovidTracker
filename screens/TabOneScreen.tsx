import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import CountryItem from '../components/CountryItem';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [countryName,setCountryName] = useState("India");
  const [countryData, setCountryData] = useState({});
  
  const getCountryData = async () =>{

    await axios.get('https://covid-api.mmediagroup.fr/v1/cases/',
      {
        params: {
          country: countryName
        }})
    .then( (response)=> {
      // handle success
      console.log(response.data);
      setCountryData(response.data.All);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  useEffect(() => {
    getCountryData();
    
  }, []);
  

  
  return (
    <SafeAreaView style={styles.container}>
      <CountryItem countryData={countryData}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#24A19C"
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
