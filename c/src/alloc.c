#include "xmalloc.c"
/** XMALLOC **/
void* xmalloc (size_t size) 
{
  void *value = malloc(size);
  if (value == 0) 
    fatal("virtual memory exhausted");
  return value;
}
/** SAVE STRING **/
char* savestring(const char *ptr, size_t len) 
{
  char *val = xmalloc (len + 1);
  val[len] = '\0';
  return memcpy (val, ptr, len);
}
