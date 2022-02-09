import * as fs from "fs/promises";
import * as path from "path";

export const readFile = async (filePath: string) => {
  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    return fileContents;
  } catch (err) {
    console.error("Error occurred during reading the file", err);
  }
};
