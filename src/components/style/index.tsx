import { apply } from "twind";

const style = {
    twForm: apply(`border-2 border-gray-300 bg-gray-200 rounded-lg shadow-lg max-w-sm my-8 p-8 m-auto space-y-2`),
    twInputBtn: apply(`max-w-sm m-auto items-center py-2 px-4 border-2 rounded text-uppercase font-bold rounded-lg bg-yellow-400 text-black shadow-md hover:bg-pink-100`),
    twInputText: apply(`w-full py-2 pl-3 pr-4 rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:border-indigo-500 hover:bg-pink-100`),
    twLabel: apply(`p-2 text-lg text-black font-bold rounded-lg hover:bg-pink-100`),
    twErrorMsg: apply(`text-red-600 py-2`),
    twHr: apply(`max-w-sm mt-8 mb-8 m-auto border-2 border-green-400`),
    twResultT: apply(`max-w-sm m-auto text-3xl font-bold text-green-600 text-center mt-8 mb-8`),
    twResultBlock: apply(`border-2 border-gray-300 max-w-sm p-4 m-auto`),
    twResultLabel: apply(`pl-2 mt-2 text-lg text-gray-700`),
    twResultText: apply(`pl-2 text-lg text-blue-600 font-medium hover:text-blue-800 hover:font-bold`),

};

export default style;