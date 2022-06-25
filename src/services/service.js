import { db } from "./firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "passengersDetails");
const driverCollectionRef = collection(db, "driverDetails");
const driverPassCollectionRef = collection(db, "onbordedPassDetails");

class UserDataServices {
  //User
  addUsers = (newUser) => {
    // console.log(newUser);
    return addDoc(userCollectionRef, newUser);
  };

  updateUsers = (id, updatedUser) => {
    const userUpdate = doc(db, "passengersDetails", id);
    return updateDoc(userUpdate, updatedUser);
  };

  deleteUsers = (id) => {
    const deleteUser = doc(db, "passengersDetails", id);
    return deleteDoc(deleteUser);
  };

  getAllUsers = async () => {
    const datas = await getDocs(userCollectionRef);
    // console.log(datas);
    let newDatas = datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log(newDatas);
    return newDatas;
  };

  getSingleUser = (id) => {
    const singleUser = doc(db, "passengersDetails", id);
    return getDoc(singleUser);
  };

  //Driver

  addDrivers = (newDriver) => {
    // console.log("In services driver ",newDriver);
    return addDoc(driverCollectionRef, newDriver);
  };

  updateDrivers = (id, updatedDriver) => {
    const DriverUpdate = doc(db, "driverDetails", id);
    return updateDoc(DriverUpdate, updatedDriver);
  };

  deleteDrivers = (id) => {
    const deleteDriver = doc(db, "driverDetails", id);
    return deleteDoc(deleteDriver);
  };

  getAllDrivers = async () => {
    const datas = await getDocs(driverCollectionRef);
    // console.log(datas);
    let newDatas = datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log("driver data in services ",newDatas);
    return newDatas;
  };

  getSingleDrivers = (id) => {
    const singleDriver = doc(db, "driverDetails", id);
    return getDoc(singleDriver);
  };

  //Driver Passengers Onboarder
  addDriverPass = (newDriver) => {
    // console.log("In services driver ",newDriver);
    return addDoc(driverPassCollectionRef, newDriver);
  };

  deleteDriverPass = (id) => {
    const deleteDriverPass = doc(db, "onbordedPassDetails", id);
    return deleteDoc(deleteDriverPass);
  };

  getAllDriverPass = async () => {
    const datas = await getDocs(driverPassCollectionRef);
    // console.log(datas);
    let newDatas = datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log("driver data in services ",newDatas);
    return newDatas;
  };
}

export default new UserDataServices();
