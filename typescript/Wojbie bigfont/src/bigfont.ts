// Original source code: https://pastebin.com/3LfWxRWh

// Switch to true to replace generic currency sign "\164" with krist symbol.
const krist = false;

const ____exports = shell ? {} : (_ENV || getfenv()); // dirty hack to support importing with os.loadAPI / dofile
export const versionName = "Bigfont by Wojbie. Typescript port by Cheatoid";
export const versionNum = 5.003; // 2021-07-21

// Font database
const rawFont = [
  [
    "\x20\x20\x20\x89\x9c\x94\x9e\x9f\x94\x87\x87\x90\x9f\x8b\x20\x88\x9d\x20\x9f\x8b\x20\x20\x8f\x20\x20\x8f\x20\x20\x20\x20\x20\x20\x20\x20\x93\x94\x96\x83\x94\x20\x20\x20\x97\x8c\x94\x97\x8c\x93",
    "\x20\x20\x20\x95\x84\x95\x88\x9c\x95\x90\x20\x85\x8b\x9f\x81\x8f\x9f\x85\x8f\x9f\x85\x8a\x20\x85\x8a\x20\x85\x20\x20\x20\x20\x20\x20\x96\x96\x81\x89\x9c\x81\x20\x20\x20\x85\x83\x81\x85\x83\x84",
    "\x20\x20\x20\x82\x83\x20\x82\x83\x20\x20\x81\x20\x20\x20\x20\x82\x83\x20\x82\x83\x20\x20\x20\x20\x8f\x8f\x8f\x20\x20\x20\x20\x20\x20\x82\x81\x20\x82\x87\x20\x20\x20\x20\x83\x20\x20\x83\x20\x83",
    "\x8b\x90\x20\x20\x8f\x94\x87\x82\x90\x95\x20\x95\x96\x97\x95\x9e\x8c\x81\x20\x20\x20\x87\x82\x90\x87\x82\x90\x20\x95\x20\x20\x8b\x20\x9f\x94\x20\x20\x20\x20\x9f\x20\x90\x20\x94\x20\x93\x83\x84",
    "\x9f\x87\x81\x83\x8f\x95\x8f\x8a\x90\x8a\x20\x85\x82\x95\x95\x89\x9b\x95\x9f\x8f\x90\x93\x82\x84\x20\x95\x20\x93\x82\x84\x83\x9f\x81\x8b\x97\x81\x94\x20\x20\x8b\x83\x87\x85\x20\x90\x82\x97\x20",
    "\x20\x20\x20\x20\x20\x20\x82\x87\x20\x82\x20\x81\x20\x81\x81\x83\x83\x20\x82\x83\x81\x8c\x8d\x84\x20\x81\x20\x20\x81\x20\x20\x20\x20\x20\x20\x20\x83\x83\x81\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20\x20\x20\x20\x95\x20\x9f\x9a\x85\x85\x85\x90\x98\x8d\x84\x85\x97\x81\x88\x99\x20\x20\x9a\x20\x9f\x86\x81\x82\x89\x90\x9f\x20\x90\x20\x94\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x97\x81",
    "\x20\x20\x20\x20\x85\x20\x20\x20\x20\x91\x91\x84\x8d\x8c\x84\x97\x81\x90\x96\x92\x81\x20\x20\x20\x8a\x90\x20\x20\x9f\x85\x88\x83\x84\x83\x97\x81\x20\x90\x20\x83\x83\x81\x20\x90\x20\x97\x81\x20",
    "\x20\x20\x20\x20\x81\x20\x20\x20\x20\x82\x82\x20\x20\x81\x20\x81\x20\x81\x82\x81\x81\x20\x20\x20\x20\x82\x81\x82\x81\x20\x20\x20\x20\x20\x20\x20\x20\x85\x20\x20\x20\x20\x20\x81\x20\x81\x20\x20",
    "\x96\x9c\x94\x88\x95\x20\x86\x83\x94\x86\x83\x94\x9f\x86\x95\x88\x8c\x81\x98\x83\x20\x87\x83\x95\x96\x83\x94\x96\x83\x94\x20\x94\x20\x20\x94\x20\x20\x98\x81\x8f\x8f\x90\x82\x9b\x20\x86\x83\x94",
    "\x9d\x81\x95\x20\x95\x20\x98\x83\x90\x90\x83\x94\x8d\x8c\x95\x90\x20\x95\x97\x83\x94\x20\x96\x20\x96\x83\x94\x82\x9c\x85\x20\x90\x20\x20\x90\x20\x82\x9b\x20\x8f\x8f\x90\x20\x98\x81\x20\x86\x20",
    "\x82\x83\x20\x83\x83\x81\x83\x83\x81\x82\x83\x20\x20\x20\x81\x82\x83\x20\x82\x83\x20\x20\x81\x20\x82\x83\x20\x82\x81\x20\x20\x81\x20\x20\x85\x20\x20\x20\x81\x20\x20\x20\x82\x20\x20\x20\x81\x20",
    "\x96\x8c\x96\x89\x8c\x94\x88\x8c\x84\x96\x83\x84\x97\x83\x94\x88\x93\x81\x88\x93\x81\x96\x9c\x91\x8a\x8f\x95\x82\x97\x20\x20\x20\x95\x8a\x98\x81\x95\x20\x20\x9d\x98\x95\x9d\x90\x95\x96\x83\x94",
    "\x95\x8f\x8e\x95\x20\x95\x95\x20\x95\x95\x20\x90\x95\x20\x95\x95\x20\x20\x95\x20\x20\x95\x20\x95\x95\x20\x95\x20\x95\x20\x90\x20\x95\x95\x82\x94\x95\x20\x20\x95\x20\x95\x95\x82\x95\x95\x20\x95",
    "\x82\x83\x81\x81\x20\x81\x83\x83\x20\x82\x83\x20\x83\x83\x20\x83\x83\x81\x81\x20\x20\x82\x83\x20\x81\x20\x81\x82\x83\x20\x82\x83\x20\x81\x20\x81\x83\x83\x81\x81\x20\x81\x81\x20\x81\x82\x83\x20",
    "\x88\x8c\x84\x96\x83\x94\x88\x8c\x84\x99\x8c\x81\x83\x97\x81\x95\x20\x95\x95\x20\x95\x95\x20\x95\x89\x98\x81\x89\x98\x81\x83\x9c\x85\x95\x83\x20\x96\x20\x20\x82\x94\x20\x98\x89\x90\x20\x20\x20",
    "\x95\x20\x20\x95\x9f\x85\x95\x20\x95\x90\x20\x95\x20\x95\x20\x95\x20\x95\x96\x97\x81\x8a\x9b\x95\x96\x82\x94\x20\x95\x20\x98\x81\x20\x95\x20\x20\x20\x96\x20\x20\x95\x20\x20\x20\x20\x20\x20\x20",
    "\x81\x20\x20\x82\x81\x81\x81\x20\x81\x82\x83\x20\x20\x81\x20\x82\x83\x20\x20\x81\x20\x81\x20\x81\x81\x20\x81\x20\x81\x20\x83\x83\x81\x82\x83\x20\x20\x20\x81\x82\x83\x20\x20\x20\x20\x8c\x8c\x84",
    "\x20\x9a\x20\x9f\x8f\x20\x95\x8f\x20\x9f\x8f\x20\x9f\x90\x95\x9f\x8f\x20\x9f\x89\x91\x9f\x8f\x90\x95\x8f\x20\x20\x91\x20\x20\x20\x91\x95\x20\x90\x20\x95\x20\x8f\x9f\x20\x8f\x8f\x20\x9f\x8f\x20",
    "\x20\x20\x20\x98\x8c\x95\x97\x20\x95\x95\x20\x91\x95\x82\x95\x9d\x8c\x85\x20\x95\x20\x9a\x8f\x95\x97\x20\x95\x20\x95\x20\x90\x20\x95\x95\x99\x20\x20\x95\x20\x95\x85\x95\x95\x20\x95\x95\x20\x95",
    "\x20\x20\x20\x82\x83\x81\x83\x83\x20\x82\x83\x20\x82\x83\x81\x82\x83\x81\x20\x81\x20\x8c\x8c\x81\x81\x20\x81\x20\x81\x20\x89\x8c\x81\x82\x20\x81\x20\x82\x20\x81\x20\x81\x81\x20\x81\x82\x83\x20",
    "\x90\x8f\x20\x9f\x90\x90\x90\x8f\x20\x9f\x8f\x90\x9f\x8a\x20\x90\x20\x90\x90\x20\x90\x90\x20\x90\x90\x20\x90\x90\x20\x90\x8f\x8f\x90\x20\x96\x81\x20\x95\x20\x82\x96\x20\x86\x89\x86\x86\x83\x94",
    "\x88\x8f\x85\x9a\x8d\x95\x97\x20\x81\x89\x8c\x90\x20\x95\x20\x95\x20\x95\x9a\x9f\x85\x95\x94\x95\x9d\x99\x20\x9a\x8f\x95\x9f\x86\x20\x82\x94\x20\x20\x95\x20\x20\x97\x81\x20\x20\x20\x20\x86\x20",
    "\x85\x20\x20\x20\x20\x85\x81\x20\x20\x83\x83\x20\x20\x82\x20\x82\x83\x81\x20\x81\x20\x82\x83\x81\x81\x20\x81\x8c\x8c\x81\x83\x83\x81\x20\x82\x81\x20\x81\x20\x82\x81\x20\x20\x20\x20\x20\x81\x20",
    "\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20",
    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20",
    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20",
    "\x20\x20\x20\x20\x91\x20\x9f\x8b\x20\x97\x83\x84\x9b\x8f\x84\x86\x87\x91\x20\x95\x20\x9e\x8c\x81\x82\x82\x20\x98\x93\x9b\x9d\x86\x20\x20\x90\x90\x20\x20\x20\x20\x20\x20\x98\x83\x9b\x83\x83\x81",
    "\x20\x20\x20\x20\x95\x20\x95\x20\x91\x94\x83\x20\x95\x20\x95\x8c\x9d\x84\x20\x94\x20\x89\x9b\x95\x20\x20\x20\x95\x9a\x95\x89\x8e\x20\x99\x99\x20\x83\x83\x95\x83\x83\x81\x95\x87\x91\x20\x20\x20",
    "\x20\x20\x20\x20\x81\x20\x82\x87\x20\x83\x83\x81\x86\x83\x84\x20\x81\x20\x20\x81\x20\x83\x83\x20\x20\x20\x20\x82\x83\x81\x20\x20\x20\x20\x81\x81\x20\x20\x20\x20\x20\x20\x82\x83\x81\x20\x20\x20",
    "\x96\x96\x20\x20\x94\x20\x86\x20\x20\x84\x20\x20\x86\x20\x20\x90\x20\x90\x96\x97\x95\x20\x20\x20\x20\x20\x20\x91\x20\x20\x98\x8c\x90\x90\x90\x20\x85\x97\x81\x85\x97\x81\x84\x97\x81\x20\x91\x20",
    "\x82\x81\x20\x83\x97\x81\x8d\x20\x20\x8e\x20\x20\x20\x20\x20\x95\x20\x95\x82\x95\x95\x20\x8f\x20\x20\x20\x20\x8e\x84\x20\x9a\x8f\x85\x9d\x99\x84\x97\x96\x94\x97\x9e\x84\x97\x96\x94\x90\x82\x94",
    "\x20\x20\x20\x8c\x8c\x84\x20\x20\x20\x20\x20\x20\x20\x20\x20\x97\x83\x20\x20\x81\x81\x20\x20\x20\x20\x86\x20\x20\x20\x20\x20\x20\x20\x81\x81\x20\x81\x20\x81\x81\x82\x81\x81\x20\x81\x82\x83\x20",
    "\x9c\x8f\x20\x9f\x8d\x81\x99\x8c\x84\x99\x89\x20\x9d\x8d\x20\x9f\x8e\x20\x96\x97\x81\x96\x83\x84\x8c\x8f\x90\x8f\x8d\x91\x89\x8c\x94\x8d\x8d\x90\x9d\x8e\x20\x9f\x8c\x20\x97\x86\x20\x9d\x8d\x20",
    "\x9d\x8c\x95\x9d\x8c\x95\x9d\x8c\x95\x9d\x8c\x95\x9d\x8c\x95\x9d\x8c\x95\x97\x97\x20\x9a\x8f\x84\x9d\x8c\x20\x9d\x8c\x20\x9d\x8c\x20\x9d\x8c\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20",
    "\x81\x20\x81\x81\x20\x81\x81\x20\x81\x81\x20\x81\x81\x20\x81\x81\x20\x81\x81\x83\x81\x20\x86\x20\x83\x83\x81\x83\x83\x81\x83\x83\x81\x83\x83\x81\x82\x83\x20\x82\x83\x20\x82\x83\x20\x82\x83\x20",
    "\x97\x83\x94\x98\x89\x91\x9b\x8c\x90\x98\x8e\x91\x99\x8c\x84\x99\x89\x20\x9a\x8e\x90\x9b\x9f\x84\x96\x9c\x94\x93\x20\x90\x90\x82\x91\x88\x89\x20\x92\x82\x90\x90\x82\x91\x82\x88\x20\x97\x8c\x84",
    "\x97\x20\x95\x97\x9b\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x98\x89\x90\x9d\x81\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x82\x96\x20\x20\x9d\x81\x95\x20\x95",
    "\x83\x83\x20\x81\x20\x81\x82\x83\x20\x82\x83\x20\x82\x83\x20\x82\x83\x20\x82\x83\x20\x20\x20\x20\x82\x83\x20\x82\x83\x20\x82\x83\x20\x82\x83\x20\x82\x83\x20\x20\x81\x20\x82\x83\x20\x85\x83\x20",
    "\x9c\x8f\x20\x9f\x8d\x81\x99\x8c\x84\x99\x89\x20\x9d\x8d\x20\x9f\x8e\x20\x9f\x9f\x90\x98\x8c\x90\x9c\x8f\x20\x9f\x8d\x81\x99\x8c\x84\x9d\x8d\x20\x82\x91\x20\x20\x93\x20\x88\x99\x20\x82\x92\x20",
    "\x98\x8c\x95\x98\x8c\x95\x98\x8c\x95\x98\x8c\x95\x98\x8c\x95\x98\x8c\x95\x95\x9d\x86\x9a\x8f\x84\x9d\x8c\x85\x9d\x8c\x85\x9d\x8c\x85\x9d\x8c\x85\x20\x95\x20\x20\x95\x20\x20\x95\x20\x20\x95\x20",
    "\x82\x83\x81\x82\x83\x81\x82\x83\x81\x82\x83\x81\x82\x83\x81\x82\x83\x81\x82\x82\x83\x20\x86\x20\x82\x83\x81\x82\x83\x81\x82\x83\x81\x82\x83\x81\x20\x81\x20\x20\x81\x20\x20\x81\x20\x20\x81\x20",
    "\x9f\x86\x90\x89\x89\x20\x9c\x8f\x20\x9f\x8d\x81\x99\x8c\x84\x99\x89\x20\x9d\x8d\x20\x20\x84\x20\x9f\x8f\x20\x93\x20\x90\x90\x82\x91\x88\x89\x20\x92\x82\x90\x90\x82\x91\x82\x8a\x20\x92\x82\x90",
    "\x95\x20\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x83\x93\x81\x8a\x86\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x95\x20\x95\x9a\x8f\x95\x20\x9d\x81\x9a\x8f\x95",
    "\x82\x83\x20\x81\x20\x81\x82\x83\x20\x82\x83\x20\x82\x83\x20\x82\x83\x20\x82\x83\x20\x20\x20\x20\x82\x83\x20\x82\x83\x81\x82\x83\x81\x82\x83\x81\x82\x83\x81\x8c\x8c\x81\x82\x83\x20\x8c\x8c\x81"
  ],
  [
    "000110000110110000110010101000000010000000100101",
    "000000110110000000000010101000000010000000100101",
    "000000000000000000000000000000000000000000000000",
    "100010110100000010000110110000010100000100000110",
    "000000110000000010110110000110000000000000110000",
    "000000000000000000000000000000000000000000000000",
    "000000110110000010000000100000100000000000000010",
    "000000000110110100010000000010000000000000000100",
    "000000000000000000000000000000000000000000000000",
    "010000000000100110000000000000000000000110010000",
    "000000000000000000000000000010000000010110000000",
    "000000000000000000000000000000000000000000000000",
    "011110110000000100100010110000000100000000000000",
    "000000000000000000000000000000000000000000000000",
    "000000000000000000000000000000000000000000000000",
    "110000110110000000000000000000010100100010000000",
    "000010000000000000110110000000000100010010000000",
    "000000000000000000000000000000000000000000000000",
    "010110010110100110110110010000000100000110110110",
    "000000000000000000000110000000000110000000000000",
    "000000000000000000000000000000000000000000000000",
    "010100010110110000000000000000110000000010000000",
    "110110000000000000110000110110100000000010000000",
    "000000000000000000000000000000000000000000000000",
    "000100011111000100011111000100011111000100011111",
    "000000000000100100100100011011011011111111111111",
    "000000000000000000000000000000000000000000000000",
    "000100011111000100011111000100011111000100011111",
    "000000000000100100100100011011011011111111111111",
    "100100100100100100100100100100100100100100100100",
    "000000110100110110000010000011110000000000011000",
    "000000000100000000000010000011000110000000001000",
    "000000000000000000000000000000000000000000000000",
    "010000100100000000000000000100000000010010110000",
    "000000000000000000000000000000110110110110110000",
    "000000000000000000000000000000000000000000000000",
    "110110110110110110000000110110110110110110110110",
    "000000000000000000000110000000000000000000000000",
    "000000000000000000000000000000000000000000000000",
    "000000000000110110000110010000000000000000010010",
    "000010000000000000000000000000000000000000000000",
    "000000000000000000000000000000000000000000000000",
    "110110110110110110110000110110110110000000000000",
    "000000000000000000000110000000000000000000000000",
    "000000000000000000000000000000000000000000000000",
    "110110110110110110110000110000000000000000010000",
    "000000000000000000000000100000000000000110000110",
    "000000000000000000000000000000000000000000000000"
  ]
];

if (krist) {
  rawFont[0][30] = "\x20\x20\x20\x20\x91\x20\x9f\x8b\x20\x97\x83\x84\x85\x87\x91\x86\x87\x91\x20\x95\x20\x9e\x8c\x81\x82\x82\x20\x98\x93\x9b\x9d\x86\x20\x20\x90\x90\x20\x20\x20\x20\x20\x20\x98\x83\x9b\x83\x83\x81";
  rawFont[0][31] = "\x20\x20\x20\x20\x95\x20\x95\x20\x91\x94\x83\x20\x91\x92\x84\x8c\x9d\x84\x20\x94\x20\x89\x9b\x95\x20\x20\x20\x95\x9a\x95\x89\x8e\x20\x99\x99\x20\x83\x83\x95\x83\x83\x81\x95\x87\x91\x20\x20\x20";
  rawFont[0][32] = "\x20\x20\x20\x20\x81\x20\x82\x87\x20\x83\x83\x81\x82\x80\x81\x20\x81\x20\x20\x81\x20\x83\x83\x20\x20\x20\x20\x82\x83\x81\x20\x20\x20\x20\x81\x81\x20\x20\x20\x20\x20\x20\x82\x83\x81\x20\x20\x20";
  rawFont[1][31] = "000000000100110000000010000011000110000000001000";
}

// Genarate fonts using 3x3 chars per a character. (1 character is 6x9 pixels)
declare type FontData = { [char: string]: [string[], string[]] };
declare type FontSize = 1|2|3|4|5|6;
const fonts = [] as FontData[];
const firstFont = {} as FontData;
{
  let char = 0;
  const [height, length] = [rawFont[0].length, rawFont[0][0].length];
  for (const i of $range(1, height, 3)) {
    for (const j of $range(1, length, 3)) {
      const thisChar = string.char(char);
      firstFont[thisChar] = [
        [
          string.sub(rawFont[0][i - 1], j, j + 2),
          string.sub(rawFont[0][i    ], j, j + 2),
          string.sub(rawFont[0][i + 1], j, j + 2)
        ],
        [
          string.sub(rawFont[1][i - 1], j, j + 2),
          string.sub(rawFont[1][i    ], j, j + 2),
          string.sub(rawFont[1][i + 1], j, j + 2)
        ]
      ];
      char++;
    }
  }
  fonts[0] = firstFont;
}

const inverter = { "0": "1", "1": "0" };
function generateFontSize(size: FontSize, yeld?: boolean) {
  if (size <= fonts.length) { return true; }
  for (const f of $range(fonts.length + 1, size)) {
    // Automagically make bigger fonts using firstFont and fonts[f-2].
    const [nextFont, lastFont] = [{} as FontData, fonts[f - 2]];
    for (const char of $range(0, 255)) {
      const thisChar = string.char(char);
      const [temp, temp2] = [[] as string[], [] as string[]];
      const templateChar = lastFont[thisChar][0];
      const templateBack = lastFont[thisChar][1];
      for (const i of $range(1, templateChar.length)) {
        const [line1, line2, line3, back1, back2, back3] = [[] as string[], [] as string[], [] as string[], [] as string[], [] as string[], [] as string[]];
        for (const j of $range(1, templateChar[0].length)) {
          const currentChar = firstFont[string.sub(templateChar[i - 1], j, j)][0];
          table.insert(line1, currentChar[0]);
          table.insert(line2, currentChar[1]);
          table.insert(line3, currentChar[2]);
          const currentBack = firstFont[string.sub(templateChar[i - 1], j, j)][1];
          if (string.sub(templateBack[i - 1], j, j) == "1") {
            // a little dirty, until transpiler becomes aware of parenthesis trick.
            let [inv] = string.gsub(currentBack[0], "[01]", inverter);
            table.insert(back1, inv);
            [inv] = string.gsub(currentBack[1], "[01]", inverter);
            table.insert(back2, inv);
            [inv] = string.gsub(currentBack[2], "[01]", inverter);
            table.insert(back3, inv);
          } else {
            table.insert(back1, currentBack[0]);
            table.insert(back2, currentBack[1]);
            table.insert(back3, currentBack[2]);
          }
        }
        table.insert(temp, table.concat(line1));
        table.insert(temp, table.concat(line2));
        table.insert(temp, table.concat(line3));
        table.insert(temp2, table.concat(back1));
        table.insert(temp2, table.concat(back2));
        table.insert(temp2, table.concat(back3));
      }
      nextFont[thisChar] = [temp, temp2];
      if (yeld) {
        const eventName = "Font" + f + "Yeld" + char;
        os.queueEvent(eventName);
        os.pullEvent(eventName);
      }
    }
    fonts[f - 1] = nextFont;
  }
  return true;
}

generateFontSize(3);

// Use pre-generated fonts instead of old code above.
const tHex = {
  [colors.white    ]: "0", // colors.toBlit(colors.white)
  [colors.orange   ]: "1", // colors.toBlit(colors.orange)
  [colors.magenta  ]: "2", // colors.toBlit(colors.magenta)
  [colors.lightBlue]: "3", // colors.toBlit(colors.lightBlue)
  [colors.yellow   ]: "4", // colors.toBlit(colors.yellow)
  [colors.lime     ]: "5", // colors.toBlit(colors.lime)
  [colors.pink     ]: "6", // colors.toBlit(colors.pink)
  [colors.gray     ]: "7", // colors.toBlit(colors.gray)
  [colors.lightGray]: "8", // colors.toBlit(colors.lightGray)
  [colors.cyan     ]: "9", // colors.toBlit(colors.cyan)
  [colors.purple   ]: "a", // colors.toBlit(colors.purple)
  [colors.blue     ]: "b", // colors.toBlit(colors.blue)
  [colors.brown    ]: "c", // colors.toBlit(colors.brown)
  [colors.green    ]: "d", // colors.toBlit(colors.green)
  [colors.red      ]: "e", // colors.toBlit(colors.red)
  [colors.black    ]: "f"  // colors.toBlit(colors.black)
};

/**
 * Write data on terminal in specified location. Can scroll.
 */
function stamp(terminal: Terminal, data: string[][], x?: number, y?: number) {
  const [oX, oY] = terminal.getSize();
  const [cX, cY] = [data[0][0].length, data[0].length];
  x = x || math.floor((oX - cX) / 2) + 1;
  y = y || math.floor((oY - cY) / 2) + 1;
  for (const i of $range(1, cY)) {
    if (i > 1 && y + i - 1 > oY) {
      term.scroll(1);
      y--;
    }
    terminal.setCursorPos(x, y + i - 1);
    terminal.blit(data[0][i - 1], data[1][i - 1], data[2][i - 1]);
  }
}

/**
 * Write data on terminal in specified location. No scroll.
 */
function press(terminal: Terminal, data: string[][], x?: number, y?: number) {
  const [oX, oY] = terminal.getSize();
  const [cX, cY] = [data[0][0].length, data[0].length];
  x = x || math.floor((oX - cX) / 2) + 1;
  y = y || math.floor((oY - cY) / 2) + 1;
  for (const i of $range(1, cY)) {
    terminal.setCursorPos(x, y + i - 1);
    terminal.blit(data[0][i - 1], data[1][i - 1], data[2][i - 1]);
  }
}

/**
 * Generate data from strings for data and colors.
 */
function makeText(size: FontSize, text: string, nFC: string|colors.Color, nBC: string|colors.Color, blit?: boolean): [string[], string[], string[]] {
  //if (typeof text != "string") { error("Not a String", 3); } // nope.
  const cFC = typeof nFC == "string" ? string.sub(nFC as string, 1, 1) : (tHex[nFC] || error("Wrong Front Color", 3));
  const cBC = typeof nBC == "string" ? string.sub(nBC as string, 1, 1) : (tHex[nBC] || error("Wrong Back Color", 3));
  const font = fonts[size - 1] || error("Wrong font size selected", 3);
  if (text == "") { return [[""], [""], [""]]; }
  const input = [] as string[];
  for (const [ch] of string.gmatch(text, ".")) {
    table.insert(input, ch);
  }
  const lines = [] as string[];
  const height = font[input[0]][0].length;
  for (const line of $range(1, height)) {
    const outLine = [] as string[];
    for (const i of $range(1, input.length)) {
      outLine[i - 1] = font[input[i - 1]] ? font[input[i - 1]][0][line - 1] : "";
    }
    lines[line - 1] = table.concat(outLine);
  }
  const tFront = [] as string[];
  const tBack = [] as string[];
  const frontSub = { "0": cFC, "1": cBC };
  const backSub = { "0": cBC, "1": cFC };
  for (const line of $range(1, height)) {
    const front = [] as string[];
    const back = [] as string[];
    for (const i of $range(1, input.length)) {
      const template = font[input[i - 1]] ? font[input[i - 1]][1][line - 1] : "";
      // a little dirty, until transpiler becomes aware of parenthesis trick.
      [front[i - 1]] = string.gsub(template, "[01]", blit ? { "0": string.sub(nFC as string, i, i), "1": string.sub(nBC as string, i, i) } : frontSub);
      [back[i - 1]] = string.gsub(template, "[01]", blit ? { "0": string.sub(nBC as string, i, i), "1": string.sub(nFC as string, i, i) } : backSub);
    }
    tFront[line - 1] = table.concat(front);
    tBack[line - 1] = table.concat(back);
  }
  return [lines, tFront, tBack];
}

/**
 * Writing in big font using current terminal settings.
 * @param text Text to be written.
 */
export function bigWrite(text: string) {
  stamp(term, makeText(1, text, term.getTextColor(), term.getBackgroundColor()), ...term.getCursorPos());
  const [x, y] = term.getCursorPos();
  term.setCursorPos(x, y - 2);
}

export function bigBlit(text: string, front: string, back: string) {
  if (text.length != front.length) { error("Invalid length of text color string", 2); }
  if (text.length != back.length) { error("Invalid length of background color string", 2); }
  stamp(term, makeText(1, text, front, back, true), ...term.getCursorPos());
  const [x, y] = term.getCursorPos();
  term.setCursorPos(x, y - 2);
}

export function bigPrint(text: string) {
  stamp(term, makeText(1, text, term.getTextColor(), term.getBackgroundColor()), ...term.getCursorPos());
  print();
}

export function hugeWrite(text: string) {
  stamp(term, makeText(2, text, term.getTextColor(), term.getBackgroundColor()), ...term.getCursorPos());
  const [x, y] = term.getCursorPos();
  term.setCursorPos(x, y - 8);
}

export function hugeBlit(text: string, front: string, back: string) {
  if (text.length != front.length) { error("Invalid length of text color string", 2); }
  if (text.length != back.length) { error("Invalid length of background color string", 2); }
  stamp(term, makeText(2, text, front, back, true), ...term.getCursorPos());
  const [x, y] = term.getCursorPos();
  term.setCursorPos(x, y - 8);
}

export function hugePrint(text: string) {
  stamp(term, makeText(2, text, term.getTextColor(), term.getBackgroundColor()), ...term.getCursorPos());
  print();
}

export function writeOn(terminal: Terminal, size: FontSize, text: string, x?: number, y?: number) {
  press(terminal, makeText(size, text, terminal.getTextColor(), terminal.getBackgroundColor()), x, y);
}

/**
 * Write/blit string on terminal in specified location.
 */
export function blitOn(terminal: Terminal, size: FontSize, text: string, front: string, back: string, x?: number, y?: number) {
  if (text.length != front.length) { error("Invalid length of text color string", 2); }
  if (text.length != back.length) { error("Invalid length of background color string", 2); }
  press(terminal, makeText(size, text, front, back, true), x, y);
}

export function makeBlittleText(size: FontSize, text: string, nFC: string|colors.Color, nBC: string|colors.Color) {
  // Somewhat ugly, but I blame the author of the original Lua code for this monstrosity.
  const out = makeText(size, text, nFC, nBC) as [string[], string[], string[]] & {
    height: number, width: number
  };
  out.height = out[0].length;
  out.width = out[0][0].length;
  return out;
}

function GenerateFontSize(size: FontSize) {
  //if (typeof size != "number") { error("Size needs to be a number", 2); } // nope.
  if (size > 6) { return false; }
  return generateFontSize(math.floor(size) as FontSize, true);
}
export { GenerateFontSize as generateFontSize };
