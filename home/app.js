const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCountScene1 = 265;
const frameCountScene2 = 121;
const frameCountScene3 = 48;
const frameCountScene4 = 88;
const frameCountScene5 = 129;

// const textBox1 = document.querySelector('.text-box1');
const txtH1 = document.querySelector('.txtH1');
const txtpara1 = document.querySelector('.txtpara1');
const textheading1 = document.querySelector('.text-heading1');
const textpara1 = document.querySelector('.text-para1');

const textBox2 = document.querySelector('.text-box2');
const textBox3 = document.querySelector('.text-box3');

const ourStory = document.querySelector('#our-story-section');
const ourService = document.querySelector('#our-service-section');
const ourTeam = document.querySelector('#our-team-section');
const ourNewsroom = document.querySelector('#our-newsroom-section');

// const ourStoryBlock = document.querySelector('.our-story-content-block');
const ourStoryH1 = document.querySelector('.oscb-h5');
const ourStoryH2 = document.querySelector('.oscb-h1');
const ourStoryH3 = document.querySelector('.oscb-p');
const ourStoryBtn = document.querySelector('#storybtn');

// const ourServiceBlock = document.querySelector('.our-service-content-block');
const ourServiceH1 = document.querySelector('.osercb-h5');
const ourServiceH2 = document.querySelector('.osercb-h1');
const ourServiceH3 = document.querySelector('.osercb-p');
const ourServiceBtn = document.querySelector('#servicebtn');

// const ourTeamBlock = document.querySelector('.our-team-content-block');
const ourTeamH1 = document.querySelector('.otcb-h5');
const ourTeamH2 = document.querySelector('.otcb-h1');
const ourTeamH3 = document.querySelector('.otcb-p');
const ourTeamBtn = document.querySelector('#teambtn');


// const ourNewsroomBlock = document.querySelector('.our-newsroom-content-block');

const ourNewsroomBlockH1 = document.querySelector('.oncb-h5');
const ourNewsroomBlockH2 = document.querySelector('.oncb-h1');
const ourNewsroomBlockH3 = document.querySelector('.oncb-p');
const ourNewsroomBlockBtn = document.querySelector('#newsroombtn');

const totalFrames = frameCountScene1 + frameCountScene2 + frameCountScene3 + frameCountScene4 + frameCountScene5;

const currentFrame = (scene, index) => {
  if (scene === 'scene-1') {
    return `../../${scene}/PKE_${index.toString().padStart(5, '0')}.png`;
  } else if (scene === 'scene-2') {
    return `../../${scene}/PK${index.toString().padStart(5, '0')}.png`;
  } else if (scene === 'scene-3') {
    return `../../${scene}/Pine${index.toString().padStart(4, '0')}.png`;
  } else if (scene === 'scene-4') {
    return `../../${scene}/PKA${index.toString().padStart(4, '0')}.png`;
  }
  else if (scene === 'scene-5') {
    return `../../${scene}/PKK${index.toString().padStart(4, '0')}.png`;
  }
  else {
    return `../../${scene}/PKK0129.png`;
  }
};

const imagesScene1 = [];
const imagesScene2 = [];
const imagesScene3 = [];
const imagesScene4 = [];
const imagesScene5 = [];

let ball = { frame: 0 };

for (let i = 0; i < frameCountScene1; i++) {
  const img = new Image();
  img.src = currentFrame('scene-1', i);
  imagesScene1.push(img);
}

for (let i = 0; i < frameCountScene2; i++) {
  const img = new Image();
  img.src = currentFrame('scene-2', i);
  imagesScene2.push(img);
}

for (let i = 0; i < frameCountScene3; i++) {
  const img = new Image();
  img.src = currentFrame('scene-3', i);
  imagesScene3.push(img);
}

for (let i = 0; i < frameCountScene4; i++) {
  const img = new Image();
  img.src = currentFrame('scene-4', i);
  imagesScene4.push(img);
}

for (let i = 0; i < frameCountScene5; i++) {
  const img = new Image();
  img.src = currentFrame('scene-5', i);
  imagesScene5.push(img);
}

gsap.to(ball, {
  frame: totalFrames,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

imagesScene1[0].onload = render;

let prevFrameIndex = 0;

function render() {
  context.canvas.width = imagesScene1[0].width;
  context.canvas.height = imagesScene1[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);

  // textBox1.style.display = 'none';
  txtH1.style.display = 'none';
  txtpara1.style.display = 'none';
  textheading1.style.display = 'none';
  textpara1.style.display = 'none';

  textBox2.style.display = 'none';
  textBox3.style.display = 'none';

  ourStory.style.display = 'none';
  ourService.style.display = 'none';
  ourTeam.style.display = 'none';
  ourNewsroom.style.display = 'none';

  // ourStoryBlock.style.display = 'none';
  ourStoryH1.style.display = 'none';
  ourStoryH2.style.display = 'none';
  ourStoryH3.style.display = 'none';
  ourStoryBtn.style.display = 'none';
  // ourServiceBlock.style.display = 'none';
  ourServiceH1.style.display = 'none';
  ourServiceH2.style.display = 'none';
  ourServiceH3.style.display = 'none';
  ourServiceBtn.style.display = 'none';

  // ourTeamBlock.style.display = 'none';

  ourTeamH1.style.display = 'none';
  ourTeamH2.style.display = 'none';
  ourTeamH3.style.display = 'none';
  ourTeamBtn.style.display = 'none';

  // ourNewsroomBlock.style.display = 'none';
  
  ourNewsroomBlockH1.style.display = 'none';
  ourNewsroomBlockH2.style.display = 'none';
  ourNewsroomBlockH3.style.display = 'none';
  ourNewsroomBlockBtn.style.display = 'none';

  if (ball.frame < frameCountScene1) {
    const frameIndex = ball.frame % frameCountScene1;
    context.drawImage(imagesScene1[frameIndex], 0, 0);

    if (frameIndex < 0) {
      // ourStoryBlock.style.display = 'none';
    }
    else if (frameIndex >= 0 && frameIndex <= 65) {

      if (frameIndex >= 0 && frameIndex <= 65) {
        txtH1.style.display = 'block';
      }
      if (frameIndex >= 0 && frameIndex <= 65) {
        txtpara1.style.display = 'block';
      }

    }
    else if (frameIndex >= 65) {
      // ourStoryBlock.style.display = 'none';
    }

    if (frameIndex < 75) {
      // textBox1.style.display = 'none';
    }
    else if (frameIndex >= 75 && frameIndex <= 121) {
      // textBox1.style.display = 'block';
      if (frameIndex >= 75 && frameIndex <= 121) {
        textheading1.style.display = 'block';
      }
      if (frameIndex >= 82 && frameIndex <= 121) {
        textpara1.style.display = 'block';
      }
    }
    else {
      // textBox1.style.display = 'none';
    }


    if (frameIndex < 137) {
      // ourStoryBlock.style.display = 'none';
    }
    else if (frameIndex >= 137 && frameIndex <= 176) {

      if (frameIndex >= 137 && frameIndex <= 176) {
        ourStoryH1.style.display = 'block';
      }
      if (frameIndex >= 143 && frameIndex <= 176) {
        ourStoryH2.style.display = 'block';
      }
      if (frameIndex >= 150 && frameIndex <= 176) {
        ourStoryH3.style.display = 'block';
      }
      if (frameIndex >= 155 && frameIndex <= 176) {
        ourStoryBtn.style.display = 'inline-block';
      }

    }
    else if (frameIndex >= 177) {
      // ourStoryBlock.style.display = 'none';
    }

    if (frameIndex < 195) {
      
    // console.log(frameIndex);
      textBox2.style.display = 'none';
    }
    else if (frameIndex >= 195 && frameIndex <= 254) {
      textBox2.style.display = 'block';
    }
    else {
      textBox2.style.display = 'none';
    }
  }
  else if (ball.frame < frameCountScene1 + frameCountScene2) {
    const frameIndex = (ball.frame - frameCountScene1) % frameCountScene2;
    context.drawImage(imagesScene2[frameIndex], 0, 0);

    // console.log(frameIndex);

    if (frameIndex < 10) {
      textBox3.style.display = 'none';
    }
    else if (frameIndex >= 10 && frameIndex <= 110) {
      textBox3.style.display = 'block';
    }
    else {
      textBox3.style.display = 'none';
    }
  }
  else if (ball.frame < frameCountScene1 + frameCountScene2 + frameCountScene3) {
    const frameIndex = (ball.frame - frameCountScene1 - frameCountScene2) % frameCountScene3;
    context.drawImage(imagesScene3[frameIndex], 0, 0);

    // console.log(frameIndex);

   

    if (frameIndex < 9) {
      // ourServiceBlock.style.display = 'none';
    }
    else if (frameIndex >= 9 && frameIndex <= 44) {
      // ourServiceBlock.style.display = 'block';
      if (frameIndex >= 9 && frameIndex <= 44) {
        ourServiceH1.style.display = 'block';
      }
      if (frameIndex >= 14 && frameIndex <= 44) {
        ourServiceH2.style.display = 'block';
      }
      if (frameIndex >= 21 && frameIndex <= 44) {
        ourServiceH3.style.display = 'block';
      }
      if (frameIndex >= 26 && frameIndex <= 44) {
        ourServiceBtn.style.display = 'inline-block';
      }
    }
    else {
      // ourServiceBlock.style.display = 'none';
    }
  }
  else if (ball.frame < frameCountScene1 + frameCountScene2 + frameCountScene3 + frameCountScene4) {
    const frameIndex = (ball.frame - frameCountScene1 - frameCountScene2 - frameCountScene3) % frameCountScene4;
    context.drawImage(imagesScene4[frameIndex], 0, 0);

    // console.log(frameIndex);

    

    if (frameIndex < 9) {
      // ourTeamBlock.style.display = 'none';
    }

    else if (frameIndex >= 9 && frameIndex <= 61) {
      // ourTeamBlock.style.display = 'block';
      if (frameIndex >= 9 && frameIndex <= 61) {
        ourTeamH1.style.display = 'block';
      }
      if (frameIndex >= 14 && frameIndex <= 61) {
        ourTeamH2.style.display = 'block';
      }
      if (frameIndex >= 21 && frameIndex <= 61) {
        ourTeamH3.style.display = 'block';
      }
      if (frameIndex >= 26 && frameIndex <= 61) {
        ourTeamBtn.style.display = 'inline-block';
      }
    }
    else {
      // ourTeamBlock.style.display = 'none';
    }

  }
  else if (ball.frame < frameCountScene1 + frameCountScene2 + frameCountScene3 + frameCountScene4 + frameCountScene5) {
    const frameIndex = (ball.frame - frameCountScene1 - frameCountScene2 - frameCountScene3 - frameCountScene4) % frameCountScene5;
    context.drawImage(imagesScene5[frameIndex], 0, 0);

    // console.log(frameIndex);


    if (frameIndex < 59) {
      // ourNewsroomBlock.style.display = 'none';
    }
    else if (frameIndex >= 59 && frameIndex <= 128) {
      // ourNewsroomBlock.style.display = 'block';
      if (frameIndex >= 59 && frameIndex <= 128) {
        ourNewsroomBlockH1.style.display = 'block';
      }
      if (frameIndex >= 64 && frameIndex <= 128) {
        ourNewsroomBlockH2.style.display = 'block';
      }
      if (frameIndex >= 71 && frameIndex <= 128) {
        ourNewsroomBlockH3.style.display = 'block';
      }
      if (frameIndex >= 76 && frameIndex <= 128) {
        ourNewsroomBlockBtn.style.display = 'inline-block';
      }
    }
    else {
      // ourNewsroomBlock.style.display = 'none';
    }
  }
  else {
    context.drawImage(imagesScene5[128], 0, 0);
  }
}
