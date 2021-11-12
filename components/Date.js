import React from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';


LocaleConfig.locales['th'] = {
  monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
  monthNamesShort: ["มกรา", "กุมภา", "มีนา", "เมษา", "พฤษภา", "มิถุนา", "กรกฎา", "สิงหา", "กันยา", "ตุลา", "พฤศจิกา", "ธันวา"],
  today: "วันนี้",
  dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
  dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."]
}
LocaleConfig.defaultLocale = "th"
const Date = () => {

  return (
    <>
      <Calendar
        theme={
          {
            // calendarBackground: "#000",
            // dayTextColor: "#fff",
            // arrowColor: "#fff",
            // selectedDayBackgroundColor: "#fff",
            // selectedDayTextColor: "#000"
          }
        }
        // monthFormat={"dd"}
        // dayComponent={(e) => {
        //   console.log('e', e)
        //   return (
        //     <View style={{ width: 40, height: 40, backgroundColor: "red" }}>
        //       <Text>{e.date.day}</Text>
        //     </View>
        //   )
        // }}
        //disableArrowLeft
        //disableArrowRight
        //hideArrows
        //hideDayNames
        //hideExtraDays
        //minDate={"2021-02-05"}
        //maxDate={"2021-05-23"}
        //current={"2021-03-10"}
        //showWeekNumbers
        // markingType="simple"
        // markedDates={{
        //   '2021-05-16': { marked: true, selectedColor: 'blue' },
        //   '2021-05-17': { marked: true },
        //   '2021-05-18': { marked: true, dotColor: 'red', activeOpacity: .8 },
        // }}
        // markingType="multi-dot"
        // markedDates={{
        //   '2021-05-16': { marked: true, selected: true, dots: [{ key: "abc", color: "yellow", selectedDotColor: "yellow" }, { color: "red", selectedDotColor: "red" }] },
        //   '2021-05-18': { marked: true, dotColor: 'red', activeOpacity: .8, dots: [{ color: "green", selectedDotColor: "yellow" }] },
        // }}
        // markingType={'period'}
        // markedDates={{
        //   '2021-05-20': { textColor: 'purple', startingDay: true, endingDay: true, color: "green" },
        //   '2021-05-22': { startingDay: true, color: 'green' },
        //   '2021-05-23': { selected: true, endingDay: true, color: 'green', textColor: '#fff' },
        //   '2021-05-04': { startingDay: true, color: 'green', },
        //   '2021-05-05': { color: 'green' },
        //   '2021-05-06': { color: 'green', endingDay: true }
        // }}
        markingType={'custom'}
        markedDates={{
          '2021-05-28': {
            customStyles: {
              container: {
                backgroundColor: 'green'
              },
              text: {
                color: 'black',
                fontWeight: 'bold'
              }
            }
          },
          '2021-05-29': {
            customStyles: {
              container: {
                backgroundColor: 'white',
                elevation: 20
              },
              text: {
                color: 'blue'
              }
            }
          }
        }}

       
        onDayLongPress={(e) => {
          console.log(`e`, e)
        }}
        onMonthChange={(e) => {
          console.log(`e`, e)
        }}
        onPressArrowLeft={(goBack) => {

          console.log("aaaa")
          goBack()
        }}
        enableSwipeMonths
        onPressArrowRight={(goFuture) => {
          console.log("bbb")
          goFuture()
        }}
        // onDayPress={(e) => {
        //   console.log(`e`, e)
        // }}
        
        style={{
           height: 340, 
           width:"90%",
           marginTop: 30,
           marginHorizontal: 20,
           borderRadius: 40,}
        }
      />
    </>

  )
}

export default Date;

