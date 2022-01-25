import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView, FlatList,Text } from 'react-native';
import CountryItem from '../components/CountryItem';
import StateItem from '../components/StateItem';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [countryData, setCountryData] = useState({});
  const [stateData,setStateData] = useState();
  
  
  const getIndiaData = async () =>{

   await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
   .then( (response)=> {
    //  console.log(response.data.data.summary);
     setCountryData(response.data.data.summary)
     setStateData(response.data.data.regional)
     console.log(stateData);
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
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={stateData}
        renderItem={({item}) => <StateItem stateData={item}/>}
        keyExtractor={item=>item.loc}
        ListHeaderComponent={<CountryItem countryData={countryData}/>}
      />
     
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2FFE9",
    width: "100%"
    
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
