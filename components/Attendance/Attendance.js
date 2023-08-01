import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Text, Image, TouchableOpacity, Alert, Share, Button } from "react-native";
import Header from "../Header/Header";
import DropDownPicker from 'react-native-dropdown-picker';

import { Calendar, LocaleConfig } from 'react-native-calendars';

const Attendance = () => {

    const [classesAttended, setClassesAttended] = useState(68);
    const [totalClasses, setTotalClasses] = useState(107);
    const [missedClasses, setMissedClasses] = useState(30);
    const [percentage, setPercentage] = useState(70);
    const [classesToAttend, setClassesToAttended] = useState(70); // To reach 75% attendance


    useEffect(() => {


        // After Fetching data of total classes and classesAttended and setting them 
        setMissedClasses(totalClasses - classesAttended);

        // Classes to Attend to Reach 75%
        setClassesToAttended(Math.round(0.75 * totalClasses - classesAttended));

        setPercentage(Math.round((classesAttended / totalClasses) * 100));

    }, [selectedSubject])



    const [subjects, setSubjects] = useState([
        {
            label: "Comp. Network",
            value: "3ITRC1"
        },
        {
            label: "OOAD",
            value: "3ITRC2"
        },
        {
            label: "Statistics",
            value: "3ITRC3"
        },
        {
            label: "TOC",
            value: "3ITRC4"
        },
        {
            label: "Web Tech",
            value: "3ITRC5"
        },
    ]);


    const [selectedSubject, setSelectedSubject] = useState({
        name: "Comp. Network",
        subjectCode: "3ITRC1"
    })


    const marked = {
        '2023-07-29': { marked: true },
        '2023-07-30': { marked: true },
        '2023-07-31': { marked: true }
    };

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'My Attendance is : ',
            });
            // if (result.action === Share.sharedAction) {
            //   if (result.activityType) {
            //     // shared with activity type of result.activityType
            //   } else {
            //     // shared
            //   }
            // } else if (result.action === Share.dismissedAction) {
            //   // dismissed
            // }
        } catch (error) {
            Alert.alert(error.message);
        }
    }


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);


    return (
        <View className="bg-white h-screen">
            <Header />

            {/* ------------------- upper section of attendance --------------------- */}
            <View className=' flex gap-1 justify-center items-center'>
                <View className='flex-row gap-2'>

                    <View className="flex justify-center items-center w-1/2 bg-[#B6E9FF] px-3 py-2 rounded-2xl">
                        {/* DOCS : https://hossein-zare.github.io/react-native-dropdown-picker-website/docs */}
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={subjects}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setSubjects}
                            placeholder="Select Subject"
                            className="bg-[#B6E9FF] "
                            style={{ zIndex: 100, borderWidth: 0, }}
                            placeholderStyle={{
                                fontWeight: "bold"
                            }}
                            dropDownContainerStyle={{
                                // backgroundColor: "#B6E9FF",
                                // bordesrWidth: 0, 
                            }}
                            listItemLabelStyle={{
                                fontWeight: "bold"
                            }}

                        />
                    </View>



                    <View className='flex justify-center items-center bg-[#B6E9FF]  px-2  rounded-2xl'>
                        <Text className="flex-row justify-center items-center">Percentage : <Text className="font-bold text-xl"> {percentage} % </Text>  </Text>
                    </View>
                </View>

                <View className="flex-row gap-1 justify-center items-center -z-10">
                    <View className='flex justify-center bg-[#C4E9E5]  p-2  rounded-2xl'>
                        <Text className="font-bold text-2xl"> {classesAttended} </Text>
                        <Text className="text-xs"> Classes Attended  </Text>
                    </View>
                    <View className='flex justify-center bg-[#FFC3CF]  p-2  rounded-2xl'>
                        <Text className="font-bold text-2xl"> {missedClasses} </Text>
                        <Text className="text-xs"> Classes Missed  </Text>
                    </View>
                    <View className='flex justify-center bg-[#D0FFD2]  p-2  rounded-2xl'>
                        <Text className="font-bold text-2xl"> {classesToAttend} </Text>
                        <Text className="text-xs"> Classes to Attended  </Text>
                    </View>
                </View>
            </View>
            {/* ----------------- upper section of attendance ---------------------- */}


            {/* -------------------------- Calendar ------------------------------- */}
            {/* How to use Calendar - Article -> 
                https://blog.logrocket.com/create-customizable-shareable-calendars-react-native/ 
            */}
            <View style={{ zIndex: -10 }}>
                <Calendar
                    className="mx-3 my-3 rounded-2xl "

                    // Here we can put semester start and end date (of classes) 
                    minDate="2023-07-10"
                    maxDate="2023-11-30"

                    markedDates={marked}  // Marked - dot
                />
            </View>
            {/* ---------x---------------- Calendar ---------------x--------------- */}

            {/* Share Button */}
            <TouchableOpacity onPress={onShare} className="mx-4 my-2 flex-row justify-center items-center py-3 rounded-2xl bg-[#B6E9FF] overflow-hidden">
                <Image source={require('../../assets/shareIcon.png')} className="w-5 h-5 mx-3" />
                <Text className="font-bold text-lg"> Share your Attendance </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity  className="mx-4 flex-row justify-center items-center py-3 rounded-2xl bg-[#B6E9FF] overflow-hidden">
            <Image source={require('../../assets/bug.png')} className="w-5 h-5 mx-3" />
            <Text className="font-bold text-lg"> Report a bug </Text>
        </TouchableOpacity> */}

        </View>
    )
}

export default Attendance