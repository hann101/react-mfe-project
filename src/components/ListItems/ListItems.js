import React, { useState } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import FolderIcon from "@mui/icons-material/Folder";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function CommonListItem(props) {
  console.log(props.contentList);
  const [contentList, updateContentList] = useState([props]);

  function handleOnDragEnd(result) {
    // 변경된 순서로 리스트 다시 생성
    const items = Array.from(contentList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    // 새로운 리스트로 업데이트
    updateContentList(items);
  }

  return (
    <>
      <div className="content-page">
        {/* onDragEnd는 컴포넌스 실행했을때 결과값을 수행하는 함수 */}
        {/* <DragDropContext> */}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {contentList.map(({ content_id, content_name }, index) => {
                  return (
                    <Draggable
                      key={content_id}
                      draggableId={content_id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <List>
                            <ListItemButton>
                              <ListItemIcon>
                                <FolderIcon />
                              </ListItemIcon>

                              <ListItemText primary={content_name} />
                            </ListItemButton>
                          </List>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
      >
        {/* <Button variant="contained" onClick={() => props.setData("test")}> */}
        {/* <Button variant="contained" onClick={() => props.setData(contentList)}> */}
        <Button variant="contained">저장</Button>
        <Button variant="contained">닫기</Button>
      </Stack>
    </>
  );
}

export default CommonListItem;
