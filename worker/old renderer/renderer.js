//QUEUE
let worker_busy = false;
let worker_queue = [];

//checker
setInterval(() => {
  console.log("Current queue length: " + worker_queue.length);
  if (!worker_busy && worker_queue.length) {
    generate_video(worker_queue[0]);
  }
}, 10000);

function generate_video(data) {
  worker_busy = true;
  console.log("Generating...... video for " + data.name);

  let generate = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successfully generated video for " + data.name);
    }, 10000);
  });

  generate
    .then((msg) => {
      //upload to storage bucket
      //email the link
      console.log(msg);
      worker_queue.shift();
      worker_busy = false;
    })
    .catch((err) => {
      console.log(err);
    });
}

function render(data) {
  worker_queue.push(data);

  return {
    message: "Added " + data.name + "'s video in queue",
    queue_length: worker_queue.length,

    console.log("Generating video ...............")
  };
}

module.exports = { render };
