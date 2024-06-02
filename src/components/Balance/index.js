import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({saldo, gastos}) {
 return (
   <View style={style.container}>

    <View style={style.item}>
    <Text style={style.itemTitle}>Saldo</Text>
    <View style={style.content}>
      <Text style={style.currencySymbol}>R$</Text>
      <Text style={style.balance}>{saldo}</Text>
      </View>
   </View>
    
    <View style={style.item}>
    <Text style={style.itemTitle}>Gastos</Text>
    <View style={style.content}>
      <Text style={style.currencySymbol}>R$</Text>
      <Text style={style.expenses}>{gastos}</Text>
    </View>
   </View>
   </View>
   
  );
}

const style = StyleSheet.create({
    container:{
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: -28,
      marginStart: 14,
      marginEnd: 14,
      borderRadius: 4,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99
    },
      itemTitle:{
      fontSize: 20,
      color: "#dadada",
    },
    content:{
      flexDirection: "row",
      alignItems: "center",
    },
    currencySymbol:{
      color: "#dadada",
      marginRight: 6,
    },
    balance:{
      fontSize: 22,
      color: "#2ecc71"
    },
    expenses:{
      fontSize: 22,
      color: "#e74c3c"
    }

})