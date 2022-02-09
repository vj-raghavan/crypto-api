import { readFile } from "../../../services/utils/fileReader";
import { FILE_PATH } from "../../../services/utils/constants";

describe("File Reader unit tests", () => {
  it("should read file", async () => {
    const path = FILE_PATH;
    const fileContents = await readFile(path);
    expect(fileContents).toBeDefined();
  });
  it("should read file and parse successfully", async () => {
    const path = FILE_PATH;
    const fileContents = await readFile(path);
    const parsedContent = JSON.parse(fileContents);
    expect(parsedContent[0]).toBeDefined();
  });
});
