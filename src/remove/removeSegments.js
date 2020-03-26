import RemoveSegment from "./removeSegment";
import removeSegmentTemplate from "../../templates/remove/removeSegmentTemplate";
import GetSegments from "../get/getSegments";

const RemoveSegments = async ()  => {
  const segments = await GetSegments();
  const removeSegment = removeSegmentTemplate;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const id = segment.Id;
    removeSegment.SegmentId = id;
    await RemoveSegment(removeSegment);
  }
}

export default RemoveSegments;