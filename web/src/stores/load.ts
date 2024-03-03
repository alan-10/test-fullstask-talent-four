import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
state:()=>({
  load:false
}),
actions:()=>({
 openLoag(){

 },
 closeLoad(){
  
 }
})

}
)