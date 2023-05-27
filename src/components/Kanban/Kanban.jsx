import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../mockData'
import { Card } from '../card/Card'
import { useState } from 'react'
import "./kanban.scss"

export function Kanban() {

    const [data, setData] = useState(mockData)
    const onDragEnd = (result) => {
        if (!result.destination) return
        const { source, destination } = result
        if (source.droppableId !== destination.droppableId) {
            // item o E, son solo nombres que le doy
            const sourceColIndex = data.findIndex(item => item.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)
            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.task]
            const destinationTask = [...destinationCol.task]

            // elimino el item del array de origen
            const [removed] = sourceTask.splice(source.index, 1)

            destinationTask.splice(destination.index, 0, removed)

            data[sourceColIndex].task = sourceTask;
            data[destinationColIndex].task = destinationTask;

            setData(data)

        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='kanban'>
                {data.map((section) => (
                    <Droppable key={section.id} droppableId={section.id}>
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                className='kanban_section'
                                ref={provided.innerRef}
                            >
                                <div className='kanban_section_title'>{section.title}</div>
                                <div className='kanban_section_content'>
                                    {section.task.map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className='kanban_task' // Agregar la clase "kanban_task"
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                        opacity: snapshot.isDragging ? '0.5' : '1',
                                                    }}
                                                >
                                                    <Card>{task.title}</Card>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );

}






