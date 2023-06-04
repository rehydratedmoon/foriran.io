import { For, createEffect, onMount } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

import * as d3 from 'd3';

export default function (props) {
  const initialPeopleNodes = props.people.map((p) => ({ x: null, y: null, ...p }));
  const [peopleNodes, setPeopleNodes] = createStore(initialPeopleNodes);

  onMount(() => {
    const { people } = props;
    //initilize svg or grab svg
    // var ul = d3.select('#ul');
    // var svg = d3.select('#svg');

    var width = 960;
    var height = 600;

    var graphData = {
      nodes: people.map((p) => p.properties),
      links: people.map((p, index, arr) => ({
        source: p.properties.id,
        target: arr[Math.floor(Math.random() * arr.length)].properties.id,
      })),
    };

    var simulation = d3
      .forceSimulation(graphData.nodes)
      .force('charge', d3.forceManyBody().strength(-150))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force(
        'link',
        d3.forceLink(graphData.links).id((nd) => nd.id)
      )
      .on('tick', ticked);

    // var links = svg
    //   .append('g')
    //   .selectAll('line')
    //   .data(graphData.links)
    //   .enter()
    //   .append('line')
    //   .attr('stroke-width', 3)
    //   .style('stroke', 'pink');

    // links.append('text').text((d) => d.name);

    // var pseudoNodes = svg
    //   .append('g')
    //   .selectAll('circle')
    //   .data(graphData.nodes)
    //   .enter()
    //   .append('circle')
    //   .attr('r', 20)
    //   .attr('fill', 'red');
    // .attr('src', (d) => d.image)
    // .attr('alt', (d) => d.nameFa)
    // .style('display', 'block')
    // .style('width', '50px')
    // .style('height', '50px')

    // .style('transform', 'translate(-50%, -50%)')
    // .style('background', 'red')
    // .style('position', 'absolute');

    var drag = d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);

    function dragstarted(event, d) {
      d3.select(this).raise().attr('stroke', 'pink').attr('strokeWidth', 3);
    }

    function dragged(event, d) {
      console.log('🚀 ~ event:', event);
      d3.select(this)
        .attr('x', (old_cx, index) => {
          // setPeopleNodes((nd, i) => i === index, 'left', `${d.x / 9.6}%`);
          return event.x;
        })
        .attr('y', (old_cy, index) => {
          // setPeopleNodes((nd, i) => i === index, 'top', `${d.y / 6}%`);
          return event.y;
        });
      // .attr('cx', (d.x = event.x))
      // .attr('cy', (d.y = event.y));
    }

    function dragended(event, d) {
      // console.log("🚀 ~ drag end:", event)
      d3.select(this).attr('stroke', null);
    }

    // pseudoNodes.call(drag);

    function ticked() {
      //updating the position
      console.log('🚀 ~ ticked');

      
      setPeopleNodes((nd, i) => i === index, 'left', `${d.x / 9.6}%`);

      nodes
        .attr('cx', function (d) {
          return d.x;
        })
        .attr('cy', function (d) {
          return d.y;
        });
      // pseudoNodes
      //   .attr('cx', (d, index) => {
      //     setPeopleNodes((nd, i) => i === index, 'left', `${d.x / 9.6}%`);
      //     return d.x;
      //   })
      //   .attr('cy', (d, index) => {
      //     setPeopleNodes((nd, i) => i === index, 'top', `${d.y / 6}%`);
      //     return d.y;
      //   });

      // links
      //   .attr('x1', (d) => d.source.x)
      //   .attr('y1', (d) => d.source.y)
      //   .attr('x2', (d) => d.target.x)
      //   .attr('y2', (d) => d.target.y);
      // console.log(simulation.alpha());
    }

    // function dragstarted(d) {
    //   console.log('🚀 ~ d:', d);
    //   //your alpha hit 0 it stops! make it run again
    //   simulation.alphaTarget(0.3).restart();
    //   d.fx = d3.event.x;
    //   d.fy = d3.event.y;
    // }
    // function dragged(d) {
    //   d.fx = d3.event.x;
    //   d.fy = d3.event.y;
    // }

    // function dragended(d) {
    //   // alpha min is 0, head there
    //   simulation.alphaTarget(0);
    //   d.fx = null;
    //   d.fy = null;
    // }
  });

  return (
    <div class='overflow-auto p-4 rd-xl b-1 b-orange6 bg-orange1'>
      <div class='grid mt-10 bg-sand1' style='width:960px; height:600px;'>
        <ul class='list-none g-col-[1/-1] g-row-[1/-1] b-1 b-orange6 rd-xl relative aspect-ratio-8/5'>
          <For each={peopleNodes}>
            {(nd) => {
              return (
                <li class=' absolute -translate-x-1/2 -translate-y-1/2 ' style={{ top: nd.top, left: nd.left }}>
                  <Node node={nd} />
                </li>
              );
            }}
          </For>
        </ul>
        <div class='g-col-[1/-1] g-row-[1/-1] b-1 b-green6 rd-xl relative'>
          <svg id='svg' class='aspect-ratio-8/5' width='960' height='600'></svg>
        </div>
        {/* <ul id='ul' class='list-none g-col-[1/-1] g-row-[1/-1] b-1 b-orange6 rd-xl relative aspect-ratio-8/5'></ul> */}
      </div>
    </div>
  );
}

const Node = (props) => {
  return (
    <div class='b-1 rd-full p-2 flex gap-2 ac bg-gray3 '>
      <img src={props.node.properties.image} alt='' class='w-5 h-5 object-cover rd-full overflow-hidden ' />
      {/* {props.node.properties.nameFa} */}
    </div>
  );
};
