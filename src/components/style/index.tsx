import { apply } from "twind";

const style = {
    twForm: apply(`border-2 border-gray-300 bg-gray-200 rounded-lg shadow-lg max-w-sm my-8 p-8 m-auto space-y-2`),
    twInputBtn: apply(`max-w-sm m-auto items-center py-2 px-4 border-2 rounded text-uppercase font-bold rounded-lg bg-yellow-400 text-black shadow-md hover:bg-pink-100`),
    twRadioBtn: apply(`w-6 h-6 inline-block mr-1 ml-2 border border-red-300`),
    twRadioLabel: apply(`pl-1 pr-2 text-xl text-blue-600 font-medium hover:text-blue-800 hover:font-bold`),
    twInputText: apply(`w-full py-2 pl-3 pr-4 rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:border-indigo-500 hover:bg-pink-100`),
    twLabel: apply(`p-2 text-lg text-black font-bold rounded-lg`),
    twErrorMsg: apply(`text-red-600 py-2`),
    twHr: apply(`max-w-sm mt-8 mb-8 m-auto border-2 border-green-400`),
    twResultT: apply(`max-w-sm m-auto text-3xl font-bold text-green-600 text-center mt-8 mb-8`),
    twResultBlock: apply(`border-2 border-green-300 max-w-sm p-4 m-auto rounded-2xl`),
    twResultBoldText: apply(`text-2xl font-bold text-center max-w-sm p-4 m-auto bg-gradient-to-r from-yellow-500 to-green-400 rounded-2xl`),
    twResultXLText: apply(`text-5xl font-bold text-center max-w-sm p-4 m-auto`),
    twResultLargeText: apply(`text-2xl font-semibold text-justify font-serif max-w-sm p-4 m-auto`),
    twResultImage: apply(`h-full w-full rounded-2xl mt-3 mb-5`),
    twResultLabel: apply(`pl-2 mt-2 text-lg font-semibold text-gray-700`),
    twResultText: apply(`pl-2 text-lg text-blue-600 font-bold hover:text-green-800`),
};

export default style;