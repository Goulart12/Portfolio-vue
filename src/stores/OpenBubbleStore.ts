import { defineStore } from 'pinia';
import {ref} from "vue";

export const openBubbleStore = defineStore('counter', () => {
    const bubbleIsOpenOne = ref(false);
    const bubbleIsOpenTwo = ref(false);
    const bubbleIsOpenThree = ref(false);
    const bubbleIsOpenFour = ref(false);

    return { bubbleIsOpenOne, bubbleIsOpenTwo, bubbleIsOpenThree, bubbleIsOpenFour}
})