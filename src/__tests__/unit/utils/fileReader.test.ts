import { parse } from "path/posix";
import { readFile } from "../../../services/utils/fileReader";

describe("File Reader unit tests", () => {
  it("should read file", async () => {
    const path = "src/assets/json/07may.json";
    const fileContents = await readFile(path);
    expect(fileContents).toBeDefined();
  });
  it("should read file and parse successfully", async () => {
    const path = "src/assets/json/07may.json";
    const fileContents = await readFile(path);
    const parsedContent = JSON.parse(fileContents);
    expect(fileContents[0]).toBeDefined();
  });
});
