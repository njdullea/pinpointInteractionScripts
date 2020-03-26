import AddSegment from "./addSegment";
import addSegmentTemplate from "../../templates/add/addSegmentTemplate";
import {times} from "../../config/time";

const AddSegments = async ()  => {
  const segmentTimesAndIds = [];
  for (let i = 0; i < times.length; i++) {
    const time = times[i];
    const seg = addSegmentTemplate;
    seg.WriteSegmentRequest.Name = "Time: " + time;
    const id = await AddSegment(seg);
    const item = {
      time: time,
      id: id
    }
    segmentTimesAndIds.push(item);
  }
  return segmentTimesAndIds;
}

export default AddSegments;