import { levelFilter, orderType } from "@/plugins/filters";
import { LevelEnum ,OrderTypeEnum} from "../../shared/enums";
describe("filter", () => {
  it("level Mapping", () => {
    expect(levelFilter(LevelEnum.Junior)).toBe("初級");
    expect(levelFilter(LevelEnum.Intermediate)).toBe("中級");
    expect(levelFilter(LevelEnum.MidtoHigh)).toBe("中高級");
    expect(levelFilter(LevelEnum.High)).toBe("高級");
  });

  it("orderType Mapping", () => {
    expect(orderType(OrderTypeEnum.Views)).toBe("觀看次數");
    expect(orderType(OrderTypeEnum.CollectCount)).toBe("收藏次數");
    expect(orderType(OrderTypeEnum.Publish)).toBe("發佈時間");
  });
});
