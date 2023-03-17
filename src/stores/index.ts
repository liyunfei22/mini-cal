import { defineStore } from "pinia";

export const useTabStore = defineStore("tab", {
  state: () => {
    return { tabIndex: 0 };
  },
  actions: {
    setTabIndex(index) {
      this.tabIndex = index;
    },
  },
});

export const userStore = defineStore("user", {
  state: () => {
    return {
      avatarUrl: "",
      nickName: "",
      gender: 0,
    };
  },
  actions: {
    setUserInfo({
      url,
      name,
      gender,
    }: {
      url: string;
      name: string;
      gender: number;
    }) {
      this.avatarUrl = url;
      this.nickName = name;
      this.gender = gender;
    },
  },
});
