(function(){
  document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>{document.body.classList.add('leaving');setTimeout(()=>location.href=b.dataset.next,260)}));
  const heart=document.getElementById('heart'), btn=document.getElementById('revealBtn'), msg=document.getElementById('heartText');
  if(heart){const reveal=()=>{msg.classList.add('show');heart.classList.add('revealed');if(btn)btn.textContent='Revealed ♥'};heart.addEventListener('click',reveal);btn&&btn.addEventListener('click',reveal)}
  const form=document.getElementById('rsvpForm');
  if(form){
    form.addEventListener('submit', async e=>{
      e.preventDefault();
      const name=document.getElementById('guestName')?.value.trim();
      const attendance=document.getElementById('attendance')?.value;
      const thanks=document.getElementById('rsvpThanks');
      const submit=form.querySelector('button[type=submit]');
      if(!name || !attendance) return;
      if(typeof window.supabase === 'undefined'){
        thanks.textContent='Unable to connect right now. Please try again.';
        thanks.classList.add('show');
        return;
      }
      const SUPABASE_URL='https://grsaqbjudrsxhmymhtlj.supabase.co';
      const SUPABASE_ANON_KEY=window.SUPABASE_ANON_KEY || 'sb_publishable_-eqoOqTSa1ma4Wup0sx7uw_4bTVmBmr';
      if(SUPABASE_ANON_KEY.startsWith('PASTE_')){
        thanks.textContent='Website setup is incomplete. Please add the Supabase publishable/anon key in assets/js/app.js.';
        thanks.classList.add('show');
        return;
      }
      submit.disabled=true;
      submit.textContent='Sending...';
      const client=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
      const {error}=await client.from('rsvps').insert({name,attendance});
      if(error){
        console.error(error);
        thanks.textContent='Sorry, your RSVP could not be saved. Please try again.';
        thanks.classList.add('show');
        submit.disabled=false;
        submit.textContent='Send RSVP';
        return;
      }
      thanks.textContent='Thank you! Your RSVP has been received. We look forward to celebrating with you. ♥';
      thanks.classList.add('show');
      form.reset();
      submit.disabled=false;
      submit.textContent='Send RSVP';
    });
  }
})();
