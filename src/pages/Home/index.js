// index HOMEEEEEE

import { StyleSheet, Text, View , FlatList} from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
    {
        id: 1,
        label: "Boleto conta luz",
        value: "350,00",
        date: "04/04/2020",
        type: 0 //despesas
    },
    {
        id: 2,
        label: "Pix Cliente Amaral Gabinethe T.I.",
        value: "4.450,00",
        date: "06/04/2020",
        type: 1 //receitas - entradas

    },
    {
        id: 3,
        label: "Salário",
        value: "10.000,00",
        date: "07/04/2020",
        type: 1 //receitas - entradas

    },
]



export default function Home(){
    return (
        <View style={styles.container}>
            <Header name="Gabriela Chagas"/>

            <Balance saldo="9.250,90" gastos="-527,62"/>

            <Actions/>

            <Text style={styles.title}>Últimas Movimentações</Text>
            <FlatList 
            style={styles.list} 
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Movements data={item} />}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        margin: 14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }
});
