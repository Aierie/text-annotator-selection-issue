import {
  createTextAnnotator,
  UserSelectAction,
} from "@recogito/text-annotator";
import '@recogito/text-annotator/dist/text-annotator.css';
import { demoAnnotations } from "./demo-annotations";

let annotator = createTextAnnotator(
  document.getElementById("annotator-target")!,
  {
    userSelectAction: UserSelectAction.NONE,
  }
);

annotator.setAnnotations(demoAnnotations);
annotator.setSelected(demoAnnotations.map((a) => a.id!));
