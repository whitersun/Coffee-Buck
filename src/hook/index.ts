import { ref } from "vue";

interface Categories {
    id ? : number;
    name ? : string;
}

interface ListCardType {
    id ? : number;
    name ? : string;
    rate?: number;
    subtitle ? : string;
    price ? : number | string;
    image ? : string;
}

export function hookDataFromHomePage() {

    const imgAvatar =
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80";

    const profile = () => {
        console.log("profile");
    };

    const onSearchChange = (e: any) => {
        console.log(e);
    };


    const categories = ref <Categories[]>([
        { id: 0, name: "Cappuccino" },
        { id: 1, name: "Espresso" },
        { id: 2, name: "Latte" },
        { id: 3, name: "Caramel" },
        { id: 4, name: "Lava Chocolate" },
    ]);

    const defaultCategories = ref<string | null | undefined>("Cappuccino");
    const segmentChanged = (event: any) => {
        defaultCategories.value = event.detail.value;
    };

    const image001 =
        "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80";

    const image002 =
        "https://images.unsplash.com/photo-1511426420268-4cfdd3763b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

    const image003 =
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1337&q=80";

    const image004 =
        "https://images.unsplash.com/photo-1462917882517-e150004895fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

    const image005 = "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    const listCard = ref < ListCardType[] > ([
        {
            id: 0,
            name: "Cappuccino",
            subtitle: "With Oat Milk",
            rate: 4,
            price: "4.20",
            image: image001,
        },
        {
            id: 1,
            name: "Cappuccino",
            subtitle: "With Chocolate",
            rate: 4,
            price: "3.14",
            image: image002,
        },
        {
            id: 2,
            name: "Cappuccino",
            subtitle: "With Caramel",
            rate: 4,
            price: "3.14",
            image: image003,
        },
        {
            id: 3,
            name: "Cappuccino",
            subtitle: "With Sweet Sugar",
            rate: 1,
            price: "3.14",
            image: image004,
        },
        {
            id: 4,
            name: "Espresso",
            subtitle: "With Caramel",
            rate: 4,
            price: "3.52",
            image: image005,
        },
        {
            id: 6,
            name: "Espresso",
            subtitle: "With Double Oak Milk",
            rate: 2,
            price: "3.36",
            image: image005,
        },
        {
            id: 7,
            name: "Espresso",
            subtitle: "With Black Sugar",
            rate: 4,
            price: "3.48",
            image: image005,
        },
        {
            id: 4,
            name: "Espresso",
            subtitle: "With Whipping Cream",
            rate: 5,
            price: "3.22",
            image: image005,
        },
    ]);

    return {
        profile,
        listCard,
        imgAvatar,
        categories,
        onSearchChange,
        segmentChanged,
        defaultCategories
    };
}